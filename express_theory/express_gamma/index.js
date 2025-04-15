const ring = (req, res, next) => {
  console.log("띵동");

  if (req.query.name == "master") {
    res.json({ name: "사장님 피자" });
  }
  next();
};

const bemin = (req, res, next) => {
  console.log("배달의 민족 주문");
  next();
};

const express = require("express");
const app = express();

app.use(ring);
app.use(bemin);

app.get("/pizza", (req, res) => {
  res.json({ name: "마르게리따" });
});

app.listen(3000, () => {
  console.log("서버시작");
});
