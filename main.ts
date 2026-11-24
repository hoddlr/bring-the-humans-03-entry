const fs = require("fs");
const path = require("path");

const botDir = process.env.MAKEFUN_BOT_DIR || process.cwd();
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const data = fs.readFileSync(path.join(botDir, "VIDEO.json"));
const parsed = JSON.parse(data.toString("utf8"));
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://www.tiktok.com/")) {
  throw new Error("VIDEO.json must contain a url string starting with https://www.tiktok.com/");
}
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "VIDEO.json"), data);
