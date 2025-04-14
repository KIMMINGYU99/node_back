const ExcelJS = require("exceljs");
const { faker } = require("@faker-js/faker/locale/ko");

const excel = new ExcelJS.Workbook();
const sheet = excel.addWorksheet("베스킨라빈스");
sheet.addRow(["베리베리스트로베리", "100", "생크림"]);
sheet.addRow(["엄마는외계인", "100", "생크림"]);
sheet.addRow(["초나숲", "100", "생크림"]);
sheet.addRow(["민초", "100", "생크림"]);
sheet.addRow(["아몬드봉봉", "100", "생크림"]);

const koreanSheet = excel.addWorksheet("한국 사람");
const locationArr = [
  "경기도",
  "강원도",
  "충청도",
  "경상도",
  "제주도",
  "서울",
  "부산",
];
koreanSheet.addRow(["이름", "나이", "사는곳"]);
faker.helpers.multiple(
  () => {
    const name = faker.name.fullName();
    const age = faker.number.int({ min: 5, max: 80 });
    const location =
      locationArr[Math.floor(Math.random() * locationArr.length)];

    koreanSheet.addRow([name, age, location]);
  },
  { count: 1000 }
);

excel.xlsx.writeFile("quiz.xlsx");
