const express = require("express");
const productRouter = express.Router();

const { productService } = require("../service/productService.js");
const { validateProductId } = require("../middleware/validateProductId.js");
const { validateProductBody } = require("../middleware/validateProductBody.js");

productRouter.get("/", async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
});

productRouter.get("/:id", validateProductId, async (req, res) => {
  const productById = await productService.getById(req.params.id);
  res.json(productById);
});

productRouter.post("/", validateProductBody, async (req, res) => {
  const { name, price, quantity } = req.body;
  const newProduct = await productService.create({
    name,
    price: +price,
    quantity: +quantity,
  });
  res.json({
    success: true,
    message: "상품 생성 완료",
    data: newProduct,
  });
});

productRouter.put(
  "/",
  validateProductBody,
  validateProductId,
  async (req, res) => {
    const { id, name, price, quantity } = req.body;

    const updatedProduct = await productService.update(id, {
      name,
      price,
      quantity,
    });

    res.status(200).json({
      success: true,
      message: "상품 수정 완료",
      data: updatedProduct,
    });
  }
);

productRouter.delete("/", validateProductId, async (req, res) => {
  await productService.delete(req.body.id);
  res.status(200).json({
    succes: true,
    message: "상품 삭제 완료",
  });
});
module.exports = { productRouter };
