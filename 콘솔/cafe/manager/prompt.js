const readline = require("readline");
class PromptManager {
  #rl;
  constructor() {
    this.#rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  askQuestion(query) {
    return new Promise((success) => this.#rl.question(query, success));
  }
  async askNumberAndAmount() {
    const menu = await this.askQuestion("번호 입력 : ");
    const amount = await this.askQuestion("개수 추가 : ");
    return [menu, amount];
  }

  makeConsole(contents) {
    console.log(contents);
  }
}
module.exports = { PromptManager };
