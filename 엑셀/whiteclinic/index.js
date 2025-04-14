const exceljs = require("exceljs");

const calender = {
  firstWeek: {},
  secondWeek: {},
  thirdWeek: {},
  fourWeek: {},
  fifthWeek: {},
};

const workbook = new exceljs.Workbook();
workbook.xlsx.readFile("202503.xlsx").then(() => {
  const week = [];
  for (let i = 3; i <= 9; i++) {
    const sheet = workbook.getWorksheet(`${i}`);
    const newArr = [];
    sheet.eachRow((v) => {
      if (v.values.some((v) => v == "수당률")) {
        const cellArr = [];
        const { values } = v;
        findDriverRow(values, cellArr);
        const data = removeDuplicates(cellArr);
        const obj = makeObj(data);
        newArr.push(obj);
      }
    });
    week.push(newArr.filter((v) => v.name.trim()));
  }
  const flatweek = week.flat();
  const aggregatedData = flatweek.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = { ...cur };
    } else {
      acc[cur.name].income += cur.income;
      acc[cur.name].revenue += cur.revenue;
    }
    return acc;
  }, {});
  const lastData = Object.values(aggregatedData);
  const sundaySheet = workbook.getWorksheet("9");
  sundaySheet.xlsx.writeFile("202503.xlsx").then(() => sundaySheet.addRow());
});

const findDriverRow = (values, cellArr) => {
  values.forEach((cell, index) => {
    if (index < 3) {
      return;
    } else if (cell.richText) {
      const plainText = cell.richText.map((seg) => seg.text).join("");
      cellArr.push(plainText);
    } else {
      cellArr.push(cell);
    }
  });
};
const removeDuplicates = (cellArr) => [...new Set(cellArr)];
const makeObj = (data) => ({
  name: data[0],
  rate: data[2],
  revenue: data[3].result || 0,
  income: data[2] * (data[3].result || 0),
});
