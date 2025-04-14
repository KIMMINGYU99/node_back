const http = require("http");

const s1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("공지사항 : 로밍 그만하기");
});

s1.listen(3000, "localhost", () => {
  console.log("서버시작");
});

const s2 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ name: "현서팡", age: 25 }));
});
s2.listen(3002, "localhost", () => {
  console.log("서버시작");
});

const s3 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.url == "/coffee") {
    res.end("여울커피");
  } else {
    res.end("현서커피");
  }
});
s3.listen(3003, "localhost", () => {
  console.log("s3 서버시작");
});
