const express = require("express");
const { productRouter } = require("./routes/productRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("서버시작");
});
