import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "blog-schedule-api",
      configureServer(server) {
        // Parse JSON body helper
        const parseBody = (req: { on: (event: string, cb: (chunk: string) => void) => void }): Promise<string> =>
          new Promise((resolve) => {
            let body = "";
            req.on("data", (chunk: string) => (body += chunk));
            req.on("end", () => resolve(body));
          });

        server.middlewares.use(async (req, res, next) => {
          // Save posts.json
          if (req.url === "/api/save-posts" && req.method === "POST") {
            try {
              const body = await parseBody(req);
              const postsPath = path.resolve(__dirname, "src/data/posts.json");
              await fs.writeFile(postsPath, body, "utf-8");

              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: false,
                  message: error instanceof Error ? error.message : "Unknown error",
                })
              );
            }
            return;
          }

          // Push to GitHub
          if (req.url === "/api/publish" && req.method === "POST") {
            try {
              // Stage posts.json
              await execAsync("git add src/data/posts.json");

              // Commit with timestamp
              const timestamp = new Date().toISOString().split("T")[0];
              await execAsync(
                `git commit -m "Publish: update blog schedule ${timestamp}"`
              );

              // Push to main
              await execAsync("git push origin main");

              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({ success: true, message: "Pushed to GitHub!" })
              );
            } catch (error) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: false,
                  message: error instanceof Error ? error.message : "Unknown error",
                })
              );
            }
            return;
          }

          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
