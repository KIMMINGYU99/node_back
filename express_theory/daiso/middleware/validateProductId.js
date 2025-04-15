const { productService } = require("../service/productService");

const validateProductId = async (req, res, next) => {
  const id = +req.params.id || +req.body.id;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "유효한 숫자 ID가 필요합니다." });
  }

  const exists = await productService.getById(id);
  if (!exists) {
    return res.status(404).json({ error: "그런 상품 없음" });
  }

  next();
};
module.exports = { validateProductId };
