class InventoryManager {
  listProduct(data) {
    data.forEach((v) => console.log(`${v.getName()} ${v.getStock()}`));
  }

  replenishProduct(data, amount) {
    data.setStock(amount);
  }
}
module.exports = { InventoryManager };
