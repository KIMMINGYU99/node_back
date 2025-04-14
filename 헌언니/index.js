const { createObjectCsvWriter } = require("csv-writer");
const kr = require("korean-name-generator");
const { courses } = require("./data.js");

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// 인문대[4] 사과대[4] 자연대 [3] 공대 [3] 예체대 [3]

const getMajor = () => {
  const r = Math.random();
  // 인문
  if (r <= 0.025) return 1;
  else if (r <= 0.05) return 2;
  else if (r <= 0.075) return 3;
  else if (r <= 0.1) return 4;
  // 사과대
  else if (r <= 0.1625) return 5;
  else if (r <= 0.225) return 6;
  else if (r <= 0.2875) return 7;
  else if (r <= 0.35) return 8;
  // 자연대
  else if (r <= 0.433) return 9;
  else if (r <= 0.516) return 10;
  else if (r <= 0.599) return 11;
  // 공대
  else if (r <= 0.699) return 12;
  else if (r <= 0.799) return 13;
  else if (r <= 0.899) return 14;
  // 예체대
  else if (r <= 0.92) return 15;
  else if (r <= 0.95) return 16;
  else return 17;
};

const csvWriter = createObjectCsvWriter({
  path: "enrollments.csv",
  header: [
    { id: "id", title: "id" },

    { id: "student_id", title: "student_id" },
    { id: "course_id", title: "course_id" },
  ],
});

const data = Array(10000)
  .fill(0)
  .map((v, i) => {
    const major = getRandom(1, 17);
    return {
      id: i,
      student_id: getRandom(0, 9999),
      course_id: getRandom(0, 199),
    };
  });

csvWriter.writeRecords(data).then(() => {
  console.log("csv 완료");
});
