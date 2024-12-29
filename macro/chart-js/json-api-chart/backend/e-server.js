import express from "express";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "http://localhost:1234",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).set("Content-Type", "text/plain").send("We are live...");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    )
    .set("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data.json"));
});

const start = async () => {
  try {
    await app.listen(PORT, () =>
      console.log(
        chalk.bgGreen.white(`Server is running at http://localhost:${PORT}`)
      )
    );
  } catch (error) {
    console.error(chalk.bgRed.blueBright.strikethrough(error.message));
  }
};

start();
