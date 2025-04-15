const { existor } = require("../middleware/existor.js");
const { validateCarData } = require("../middleware/validator.js");
const { carService } = require("../services/carService.js");
const express = require("express");
const carsRouter = express.Router();

carsRouter.get("/", (req, res) => {
  const cars = carService.getAll();
  res.json(cars);
});

carsRouter.get("/:id", existor, (req, res) => {
  const car = carService.getById(req.params.id);
  res.json(car);
});

carsRouter.post("/", validateCarData, (req, res) => {
  carService.create(req.body);
  res.json({ succes: true, message: "차량 등록 완료" });
});

carsRouter.put("/", (req, res) => {
  const result = carService.update(req.body);
  if (!result) res.status(404).json({ succes: false, message: "그런 차 없음" });
  res.json({ succes: true, message: "차량 업데이트 완료" });
});

carsRouter.delete("/", (req, res) => {
  const result = carService.delete(req.body.id);
  if (!result) res.status(404).json({ succes: false, message: "그런 차 없음" });
  res.json({ succes: true, message: "차량 삭제 완료" });
});

module.exports = { carsRouter };
