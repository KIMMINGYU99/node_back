const express = require("express");
const app = express();
const { carsRouter } = require("./routes/carsRouter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/cars", carsRouter);

app.listen(3000, () => {
  console.log("서버 실행");
});
