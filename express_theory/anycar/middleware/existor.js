const { carService } = require("../services/carService");

const existor = (req, res, next) => {
  const { id } = req.params;
  const car = carService.getById(id);
  if (!car)
    return res.status(404).json({ succes: false, message: "그런 차 없음" });

  next();
};
module.exports = { existor };
