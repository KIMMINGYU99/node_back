const { Coffee } = require("./coffee.js");
const { Managers } = require("./manager/base.js");

const initializeData = () => {
  const { data } = Managers;
  if (data.existsData()) {
    const getData = data.getData();
    const { coffeeMenu } = getData;
    const newData = coffeeMenu.map((v) => new Coffee(v.name, v.stock, v.price));
    return newData;
  } else {
    const initData = [
      { name: "아메리카노", stock: 0, price: 3000 },
      { name: "우유라떼", stock: 0, price: 3500 },
      { name: "두유라떼", stock: 0, price: 4000 },
    ];
    data.saveData("coffeeMenu", initData);
    return data.getData();
  }
};

module.exports = { initializeData };
