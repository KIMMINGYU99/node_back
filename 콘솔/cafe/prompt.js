const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((success) => rl.question(query, success));

// export 문법
module.exports = { askQuestion };
