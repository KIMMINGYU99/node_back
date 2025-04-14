const { Managers } = require("../manager/base");
const { ExitOption } = require("./exit");
const { ReplenishOption } = require("./replenish");
const { SellOption } = require("./sell");
const { SettlementOption } = require("./settlement");

const menuOption = {
  1: new SellOption(),
  2: new ReplenishOption(Managers.inventory, Managers.prompt, Managers.data),
  3: new SettlementOption(),
  4: new ExitOption(),
};

module.exports = { menuOption };
