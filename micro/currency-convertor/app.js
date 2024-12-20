import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query, calback) => {
  rl.question(query, calback);
};

const convert = () => {
  // Exchange Rate Api
  const apiKey = "fd0fb350ebb048fbf0178791";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  https.get(url, (res) => {
    // res allows 3 events | data, err, end

    // fetching data ---------
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const rates = JSON.parse(data).conversion_rates;
      //   console.log(rates);

      askQuestion("Enter the amount in USD: ", (n) => {
          if (n.toLowerCase() === "exit") {
            rl.close();
            console.log(chalk.bgCyanBright("Thank You!"));
            return;
          }

        askQuestion("Enter the currency (e.g., INR, EUR, NPR): ", (curr) => {
          const amount = parseInt(n);
          const result = rates[curr.toUpperCase()] * amount;
          if (result)
            console.log(
              chalk.bgBlackBright.strikethrough(
                ` ${amount} USD is approx. ${result.toFixed(2)}. `
              )
            );
          else console.error(chalk.strikethrough("Invalid Currency Code"));
          console.log("\n");
          convert();
        });
      });
    });
  });
};

convert();
