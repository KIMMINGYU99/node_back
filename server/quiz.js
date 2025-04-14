const http = require("http");

const coffeeJSON = [
  { name: "아메리카노" },
  { name: "바닐라라떼" },
  { name: "카페라떼" },
];
const s1 = http.createServer((req, res) => {
  if (req.url == "/coffee") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(coffeeJSON));
  } else if (req.url == "/cookie") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1 style='color:green;'>쿠키</h1>");
  } else {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1 style='color:green'>메가커피 ㅎㅇ</h1>");
  }
});
s1.listen(3000, "localhost", () => {
  console.log("s1 서버시작");
});
