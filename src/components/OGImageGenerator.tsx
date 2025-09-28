import { useEffect, useRef } from "react";

// This component generates Open Graph images dynamically for social sharing
export const OGImageGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateOGImage = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size for Open Graph (1200x630)
      canvas.width = 1200;
      canvas.height = 630;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
      gradient.addColorStop(0, "#0f172a"); // slate-900
      gradient.addColorStop(0.5, "#7c3aed"); // purple-600
      gradient.addColorStop(1, "#0f172a"); // slate-900

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1200, 630);

      // Add some geometric shapes for visual interest
      ctx.fillStyle = "rgba(139, 92, 246, 0.1)"; // purple with opacity
      ctx.beginPath();
      ctx.arc(200, 150, 100, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(236, 72, 153, 0.1)"; // pink with opacity
      ctx.beginPath();
      ctx.arc(1000, 480, 120, 0, Math.PI * 2);
      ctx.fill();

      // Add title text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 64px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("MyRoboticTrader", 600, 200);

      // Add subtitle
      ctx.font = "36px Arial, sans-serif";
      ctx.fillStyle = "#e2e8f0"; // gray-200
      ctx.fillText("Set It and Forget It Crypto Trading", 600, 260);

      // Add results text
      ctx.font = "bold 48px Arial, sans-serif";
      ctx.fillStyle = "#10b981"; // green-500
      ctx.fillText("$12,450 Total Profits", 600, 350);

      // Add subtitle
      ctx.font = "28px Arial, sans-serif";
      ctx.fillStyle = "#a78bfa"; // purple-300
      ctx.fillText(
        "Real Results • 8+ Months Trading • Always Growing",
        600,
        400
      );

      // Add call to action
      ctx.font = "bold 32px Arial, sans-serif";
      ctx.fillStyle = "#fbbf24"; // yellow-400
      ctx.fillText("Get Free Training Now", 600, 500);

      // Add robot icon (simple representation)
      ctx.fillStyle = "#8b5cf6"; // purple-500
      ctx.fillRect(550, 520, 100, 60);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 36px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("R", 600, 560);

      // Convert canvas to blob and create object URL
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);

            // Update meta tags with the generated image
            const ogImage = document.querySelector(
              'meta[property="og:image"]'
            ) as HTMLMetaElement;
            const twitterImage = document.querySelector(
              'meta[property="twitter:image"]'
            ) as HTMLMetaElement;

            if (ogImage) {
              ogImage.setAttribute("content", url);
            }

            if (twitterImage) {
              twitterImage.setAttribute("content", url);
            }
          }
        },
        "image/png",
        0.9
      );
    };

    // Generate image after a small delay to ensure canvas is ready
    setTimeout(generateOGImage, 100);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "none" }} // Hidden canvas for image generation
      width={1200}
      height={630}
    />
  );
};
