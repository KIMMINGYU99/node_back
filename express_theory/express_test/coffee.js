const express = require("express");

const app = express();
app.use(express.text());

app.get("/coffee", (req, res) => {
  res.send(`it커피`);
});
app.get("/cookie", (req, res) => {
  res.json({ name: "포뇨쿠키", hp: 300 });
});

app.get("/bread", (req, res) => {
  const { query } = req;
  const { count, size } = query;
  console.log(query);
  res.json({ count, size, breadName: "초코빵" });
});
app.listen(3000, () => {
  console.log("시작함");
});

app.post("/jelly", (req, res) => {
  console.log(req.body);
  res.json({ test: true });
});

app.post("/boardGame", (req, res) => {
  const { body } = req;
  res.json({ name: `${body}꿀잼` });
});
