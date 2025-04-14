const { DataManager } = require("./data");
const { InventoryManager } = require("./inventory");
const { PromptManager } = require("./prompt");

const Managers = {
  inventory: new InventoryManager(),
  prompt: new PromptManager(),
  data: new DataManager(),
};

module.exports = { Managers };
