const express = require("express");
const app = express();
const { productRouter } = require("./router/productRouter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000 서버 실행");
});
