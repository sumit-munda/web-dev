import fs from "fs/promises";
import path from "path";
import { stdin, stdout } from "process";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query, callback) => {
  rl.question(query, callback);
};

const showMenu = () => {
  console.log("1. Add a Task");
  console.log("2. View Tasks");
  console.log("3. Exit");

  askQuestion("Choose an option: ", (n) => {
    switch (n) {
      case "1":
        askQuestion("Enter the task: ", (task) => {
          if (task.trim()) {
            fs.appendFile(
              path.join(__dirname, "todo.txt"),
              `\n${task}`,
              "utf-8"
            )
              .then(() => {
                console.log(`Task added: ${task}\n`);
                showMenu();
              })
              .catch((err) => {
                console.error(`Error adding task: ${err}\n`);
                showMenu();
              });
          } else {
            console.log("Task cannot be empty!\n");
            showMenu();
          }
        });
        break;

      case "2":
        fs.readFile(path.join(__dirname, "todo.txt"), "utf-8")
          .then((data) => {
            console.log(data, "\n");
            showMenu();
          })
          .catch((err) => {
            console.error(err);
          });
        break;
      case "3":
        rl.close();
        console.log("Goodbuy!");
        break;
      default: {
        console.error("Invalid Input!\n");
        showMenu();
        break;
      }
    }
  });
};

showMenu();
