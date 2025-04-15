const nunjucks = require("nunjucks");
const express = require("express");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/cookie", (req, res) => {
  const { name } = req.query;
  res.render(__dirname + "/views/cookie", { name });
});

app.listen(3000, () => {
  console.log("서버시작");
});
