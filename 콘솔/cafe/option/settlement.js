const { Option } = require("./option");

class SettlementOption extends Option {
  async execute(data) {
    console.log("정산시작");
  }
}
module.exports = { SettlementOption };
