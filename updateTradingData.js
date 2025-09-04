// updateTradingData.js - Secure version with placeholders
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Google Sheets API Configuration - SECURE PLACEHOLDERS
const SHEET_ID = "your_sheet_id_here"; // GitHub Actions will replace this
const API_KEY = "your_google_api_key_here"; // GitHub Actions will replace this

console.log("🔄 Update script is running...");

function parseCurrency(value) {
  if (typeof value !== "string") return 0;
  return parseFloat(value.replace(/[$,]/g, "")) || 0;
}

async function updateTradingData() {
  const dataDir = path.join(__dirname, "src", "data");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (API_KEY.includes("your_google") || SHEET_ID.includes("your_sheet")) {
    console.log("⚠️  Please update API_KEY and SHEET_ID in the script!");
    return;
  }

  console.log("🌐 Fetching live data from Google Sheets...");

  try {
    // Use the correct sheet name "Calculations"
    const monthlyResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Calculations!A3:C12?key=${API_KEY}`
    );

    const summaryResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Calculations!A15:B18?key=${API_KEY}`
    );

    console.log(`📡 Monthly data status: ${monthlyResponse.status}`);
    console.log(`📡 Summary data status: ${summaryResponse.status}`);

    if (!monthlyResponse.ok || !summaryResponse.ok) {
      throw new Error(
        `API Error - Monthly: ${monthlyResponse.status}, Summary: ${summaryResponse.status}`
      );
    }

    const monthlyData = await monthlyResponse.json();
    const summaryData = await summaryResponse.json();

    console.log(
      "📊 Monthly data received:",
      monthlyData.values ? monthlyData.values.length + " rows" : "No data"
    );
    console.log(
      "📊 Summary data received:",
      summaryData.values ? summaryData.values.length + " rows" : "No data"
    );

    // Parse monthly data
    const monthlyStats = [];
    let totalProfit = 0;
    let totalTrades = 0;

    if (monthlyData.values) {
      monthlyData.values.forEach((row) => {
        if (row[0] && row[1] && row[0] !== "Grand Total") {
          const monthNum = row[0].split("-")[1];
          const monthNames = [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          const monthName = monthNames[parseInt(monthNum)] || row[0];

          const profit = parseCurrency(row[1]);
          monthlyStats.push({ month: monthName, profit: profit });
        } else if (row[0] === "Grand Total") {
          totalProfit = parseCurrency(row[1]);
          totalTrades = parseInt(row[2]) || 0;
        }
      });
    }

    // Parse summary data
    let avgProfitPerTrade = 0;
    let monthlyAverage = 0;
    let dailyAverage = 0;
    let bestMonth = 0;

    if (summaryData.values) {
      summaryData.values.forEach((row) => {
        if (row[0] && row[1]) {
          const value = parseCurrency(row[1]);
          switch (row[0]) {
            case "Avg Profit / Trade":
              avgProfitPerTrade = value;
              break;
            case "Monthly Avg":
              monthlyAverage = value;
              break;
            case "Daily Avg":
              dailyAverage = value;
              break;
            case "Best Month":
              bestMonth = value;
              break;
          }
        }
      });
    }

    // Generate the live data file
    const liveContent = `// Live Trading Data - Updated from Google Sheets
// Last updated: ${new Date().toISOString()}

export const liveTradingData = {
  totalProfit: ${totalProfit || 3996.17},
  monthlyAverage: ${monthlyAverage || 444.02},
  dailyAverage: ${dailyAverage || 16.79},
  bestMonth: ${bestMonth || 817.31},
  totalTrades: ${totalTrades || 844},
  avgProfitPerTrade: ${avgProfitPerTrade || 4.73},
  monthlyData: ${JSON.stringify(
    monthlyStats.length > 0
      ? monthlyStats
      : [
          { month: "Jan", profit: 477.23 },
          { month: "Feb", profit: 686.71 },
          { month: "Mar", profit: 261.97 },
          { month: "Apr", profit: 552.58 },
          { month: "May", profit: 376.3 },
          { month: "Jun", profit: 382.97 },
          { month: "Jul", profit: 817.31 },
          { month: "Aug", profit: 413.59 },
          { month: "Sep", profit: 27.51 },
        ],
    null,
    2
  )},
  lastUpdated: "${new Date().toISOString()}",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};`;

    const filePath = path.join(dataDir, "liveTrading.ts");
    fs.writeFileSync(filePath, liveContent, "utf8");

    console.log("✅ Successfully updated with live data!");
    console.log(`📊 Total Profit: $${totalProfit || "fallback"}`);
    console.log(`📈 Total Trades: ${totalTrades || "fallback"}`);
  } catch (error) {
    console.error("❌ Error:", error.message);

    // Create fallback file
    const fallbackContent = `// Live Trading Data - Fallback
export const liveTradingData = {
  totalProfit: 3996.17,
  monthlyAverage: 444.02,
  dailyAverage: 16.79,
  bestMonth: 817.31,
  totalTrades: 844,
  avgProfitPerTrade: 4.73,
  monthlyData: [
    { month: "Jan", profit: 477.23 },
    { month: "Feb", profit: 686.71 },
    { month: "Mar", profit: 261.97 },
    { month: "Apr", profit: 552.58 },
    { month: "May", profit: 376.30 },
    { month: "Jun", profit: 382.97 },
    { month: "Jul", profit: 817.31 },
    { month: "Aug", profit: 413.59 },
    { month: "Sep", profit: 27.51 },
  ],
  lastUpdated: "${new Date().toISOString()}",
  isLiveData: false,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};`;

    const filePath = path.join(dataDir, "liveTrading.ts");
    fs.writeFileSync(filePath, fallbackContent, "utf8");
    console.log("📄 Fallback file created");
  }
}

updateTradingData();
