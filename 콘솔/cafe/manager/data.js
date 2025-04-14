const fs = require("fs");
const { env } = require("../env");

class DataManager {
  existsData() {
    return fs.existsSync(env.dataStore);
  }
  getData() {
    return JSON.parse(fs.readFileSync(env.dataStore, "utf-8"));
  }

  makeObj(data) {
    return {
      name: data.getName(),
      stock: data.getStock(),
      price: data.getPrice(),
    };
  }
  format(key, value) {
    return { [key]: value };
  }

  saveData(keyName, data) {
    const formatted = this.format(
      keyName,
      data.map((v) => this.makeObj(v))
    );
    fs.writeFileSync(env.dataStore, JSON.stringify(formatted), "utf-8");
  }
}
module.exports = { DataManager };
