const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const main = async () => {
  const name = await askQuestion("폴더 이름 입력 : ");
  const cnt = parseInt(await askQuestion("개수 입력 : "), 10);

  for (let i = 0; i < cnt; i++) {
    const folderName = i === 0 ? name : `${name}${i}`;
    if (fs.existsSync(folderName)) {
      console.log(`"${folderName}"는 이미 존재합니다.`);
      continue;
    }
    fs.mkdirSync(folderName);
  }

  rl.close();
};

main();
