const { resolve } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((success) => rl.question(query, success));

const main = async () => {
  console.log("두유 월드에 온걸 환영함");
  while (true) {
    console.log("주문하기");
    console.log("포장하기");
    console.log("종료");

    const answer = await askQuestion("번호 입력 : ");
    if (answer == "1") console.log("주문시작 \n");
    else if (answer == "2") console.log("포장시작 \n");
    else if (answer == "3") break;
    else console.log("ERROR \n");
  }
};
main();
