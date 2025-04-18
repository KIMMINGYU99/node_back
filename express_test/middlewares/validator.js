const { errorResponse } = require("../utils/response");

const validateProductData = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json(errorResponse("유효한 상품명이 필요합니다."));
  }

  if (typeof price !== "number" || price < 0) {
    return res
      .status(400)
      .json(errorResponse("가격은 0 이상의 숫자여야 합니다."));
  }

  next();
};

const validateProductId = (req, res, next) => {
  const id = req.body?.id || req.params?.id;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json(errorResponse("유효한 상품 ID가 필요합니다."));
  }

  next();
};

module.exports = { validateProductData, validateProductId };
