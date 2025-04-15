const express = require("express");
const app = express();

app.get("/coffee", (req, res) => {
  res.sendFile(__dirname + "/coffee.html");
});

const breads = [
  { name: "소금빵", price: 3000 },
  { name: "초코빵", price: 3000 },
  { name: "슈크림빵", price: 3000 },
];

app.get("/bread", (req, res) => {
  res.json(breads);
});
app.listen(3000, () => {
  console.log("서버시작");
});
