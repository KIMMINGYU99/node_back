const http = require("http");

const s1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(
    "안녕하세요 피싱사이트입니다 <h1 style='color:pink'>서버관리자</h1> 입니다"
  );
});

s1.listen(3001, "localhost", () => {
  console.log("서버시작");
});
