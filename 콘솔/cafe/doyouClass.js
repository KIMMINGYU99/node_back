const fs = require("fs");

class Doyou {
  #menuData;
  #salesData;
  #menuPath = "doyou.json";
  #salesPath = "sales.json";
  constructor() {
    this.#menuData = this.loadData(this.#menuPath, this.initMenuData());
    this.#salesData = this.loadData(this.#salesPath, {});
  }
  initMenuData() {
    return {
      coffeeMenu: [
        { name: "아메리카노", stock: 0, price: 3000 },
        { name: "우유라떼", stock: 0, price: 3000 },
        { name: "두유라떼", stock: 0, price: 3000 },
      ],
    };
  }
  loadData(dataPath, initData) {
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    } else {
      fs.writeFileSync(dataPath, JSON.stringify(initData, null, 2), "utf-8");
      return initData;
    }
  }

  saveData(dataPath, data) {
    fs.writeFileSync(dataPath, JSON.stringify(data), "utf-8");
  }
  addStock(menuNum, cnt) {
    const item = this.#menuData.coffeeMenu[menuNum - 1];
    if (!item) {
      console.log("존재하지 않는 메뉴입니다.");
      return;
    }

    item.stock += +cnt;
    this.saveData(this.#menuPath, this.#menuData);
    console.log(`${item.name} 재고가 ${cnt}개 추가되었습니다.`);
  }
  sellMenu(menuNum, cnt) {
    const item = this.#menuData.coffeeMenu[menuNum - 1];

    if (!item) {
      console.log("존재하지 않는 메뉴입니다.");
      return;
    }

    if (item.stock < +cnt) {
      console.log("재고가 부족합니다.");
      return;
    }

    item.stock -= +cnt;

    // 매출 기록 추가
    const today = new Date().toISOString().slice(0, 10);
    if (!this.#salesData[today]) this.#salesData[today] = {};
    if (!this.#salesData[today][item.name]) {
      this.#salesData[today][item.name] = { count: 0, total: 0 };
    }

    this.#salesData[today][item.name].count += cnt;
    this.#salesData[today][item.name].total += cnt * item.price;

    this.saveData(this.#menuPath, this.#menuData);
    this.saveData(this.#salesPath, this.#salesData);

    console.log(`${item.name} ${cnt}잔 판매 완료!`);
  }
}
module.exports = { Doyou };
