const express = require("express");
const { students } = require("./students.js");
const { successResponse, failResponse } = require("./utils/response.js");

const app = express();
app.use(express.json());

// 전체 학생 조회
app.get("/students", (req, res) => {
  successResponse(res, 200, "학생 모든 데이터", students);
});

// 상세 학생 가져오기

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const targetStudent = students.find((v) => v.id == +id);
  if (!targetStudent) {
    failResponse(
      res,
      400,
      "유효하지 않은 요청입니다",
      "그런 새끼 없음",
      "없음 ㅅㄱ"
    );
  } else {
    successResponse(res, 200, `id:${id} 학생 데이터`, targetStudent);
  }
});

app.delete("/students", (req, res) => {
  const { id } = req.body;
  const result = students.find((v) => v.id == +id);
  if (!result) {
    failResponse(
      res,
      400,
      "유효하지 않은 요청입니다",
      "그런 새끼 없음",
      "삭제 못함 ㅅㄱ"
    );
  } else {
    const filteredStudent = students.filter((v) => v.id != +id);
    successResponse(res, 200, `${id}학생 삭제 완료`, filteredStudent);
  }
});

app.post("/students", (req, res) => {});

app.listen(3000, () => {
  console.log("서버 시작");
});
