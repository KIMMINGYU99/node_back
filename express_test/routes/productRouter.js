const express = require("express");
const { productService } = require("../services/productService");
const { successResponse } = require("../utils/response");
const {
  validateProductId,
  validateProductData,
} = require("../middlewares/validator");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const data = await productService.getAll();
  res.json(data);
});

productRouter.get("/:id", validateProductId, async (req, res) => {
  const data = await productService.getById(req.params.id);
  res.json(successResponse(`${req.params.id} 상품 조회 성공`, data));
});

productRouter.post("/", validateProductData, async (req, res) => {
  const newData = await productService.create(req.body);
  res.json(successResponse("상품 생성 성공", newData));
});

productRouter.put("/", validateProductData, async (req, res) => {
  const { id, name, price } = req.body;

  const updated = await productService.update(id, { name, price });
  res.json(successResponse(`${id}번 상품 수정 성공`, updated));
});

productRouter.delete("/", validateProductId, async (req, res) => {
  await productService.delete(req.body.id);
  res.json(successResponse(`${req.body.id}번 상품 삭제 성공`));
});

module.exports = { productRouter };
