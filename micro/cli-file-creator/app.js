import { error } from "console";
import fs from "fs/promises";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const askQuestion = (query, callback) => {
  rl.question(query, callback);
};

const app = async () => {
  try {
    const name = await new Promise((res) => {
      askQuestion("Enter the name of the file: ", res);
    });

    const data = await new Promise((res) => {
      askQuestion("Enter the content for the file: ", res);
    });

    await fs.writeFile(
      path.join(__dirname, "folder", `${name}.txt`),
      data,
      "utf-8"
    );

    console.log(`File '${name}.txt' created successfully`);
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
};

app();
