const { initializeData } = require("./doyouData.js");
const { InvalidOption } = require("./option/invalid.js");
const { menuOption } = require("./option/base.js");
const { Managers } = require("./manager/base.js");

const main = async () => {
  const data = initializeData();

  console.log("두유 월드에 온걸 환영함");

  while (true) {
    console.log("1. 판매하기");
    console.log("2. 재고 채우기");
    console.log("3. 금일 정산");
    console.log("4. 시스템 종료");
    const answer = await Managers.prompt.askQuestion("번호 입력 : ");
    const option = menuOption[+answer] || new InvalidOption();
    await option.execute(data);
  }
};

main();
