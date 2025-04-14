const { PromptManager } = require("./prompt");

const Managers = {
  prompt: new PromptManager(),
};

module.exports = { Managers };
