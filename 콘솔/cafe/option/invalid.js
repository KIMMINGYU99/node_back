const { Option } = require("./option");

class InvalidOption extends Option {
  async execute(data) {
    console.log("그런거 없음");
  }
}
module.exports = { InvalidOption };
