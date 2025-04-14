class Coffee {
  #name;
  #stock;
  #price;
  constructor(name, stock, price) {
    this.#name = name;
    this.#stock = stock;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }
  getStock() {
    return this.#stock;
  }
  getPrice() {
    return this.#price;
  }
  setStock(stock) {
    if (this.#stock < stock) {
      console.log("수량이 음수가 될 수 없음");
    }
    this.#stock += +stock;
  }
  setPrice(price) {
    if (price < 0) {
      console.log("가격이 음수가 될 수 없음");
    }
    this.#price += +price;
  }
}
module.exports = { Coffee };
