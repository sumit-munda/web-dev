import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (res) => { // res is an readable stream ------------

    // fetching data ------------
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    // after fetched --------------
    res.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke:`);
      console.log(chalk.green(`${joke.setup}`));
      console.log(chalk.bgRedBright.strikethrough(` ${joke.punchline} `));
    });

    res.on('error', err => {
        console.error(`Error fetching the joke, ${err.message}`);
        
    })
  });
};

getJoke();

// Chalk is a popular Node.js library used for styling and coloring text in the terminal or console. It provides a simple API to add colors, backgrounds, bold, underlined, and other text styles to the output in your terminal, making it easier to create visually appealing and readable command-line applications.

// Text Colors
// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// gray (light gray)
// grey (alias for gray)
// blackBright (bright black, same as dark gray)
// redBright
// greenBright
// yellowBright
// blueBright
// magentaBright
// cyanBright
// whiteBright

// Background Colors
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
// bgBlackBright
// bgRedBright
// bgGreenBright
// bgYellowBright
// bgBlueBright
// bgMagentaBright
// bgCyanBright
// bgWhiteBright

// Text Styles
// bold – Makes the text bold.
// dim – Makes the text slightly dimmer.
// italic – Makes the text italic (not supported on all terminals).
// underline – Underlines the text.
// inverse – Inverts the foreground and background colors.
// strikethrough – Strikes through the text.
// reset – Resets the text style to default.
