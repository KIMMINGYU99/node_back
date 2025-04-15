const validateProductBody = (req, res, next) => {
  const { name, price, quantity } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "name은 문자열로 필수입니다." });
  }

  if (price === undefined || typeof price !== "number" || price <= 0) {
    return res.status(400).json({ error: "price는 0보다 큰 숫자여야 합니다." });
  }

  if (quantity === undefined || typeof quantity !== "number" || quantity < 0) {
    return res
      .status(400)
      .json({ error: "quantity는 0 이상의 숫자여야 합니다." });
  }

  next();
};
module.exports = { validateProductBody };
