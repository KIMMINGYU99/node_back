// 런타임 에러
// [외부프로그램 연결] => 파일 연결, 네트워크연결(api), DB연결
// try - catch를 써서 프로그램 정상 작동화 시킴

// const fs = require("fs");
// try {
//   const data = fs.readFileSync("test.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("그런 파일 없음");
// }
try {
  console.log("작업시작");
  throw new Error("에러 던지기");
} catch (e) {
  console.log(e, e.message);
}
