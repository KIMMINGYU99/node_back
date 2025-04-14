const ExcelJS = require("exceljs");

const workbook = new ExcelJS.Workbook(); // 엑셀 생성

workbook.xlsx.readFile("quiz.xlsx").then(() => {
  const sheetzero = workbook.getWorksheet(1);
  sheetzero.eachRow((v, i) => {
    console.log(`{${v.values}}`);
  });
});
