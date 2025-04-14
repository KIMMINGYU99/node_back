const fs = require("fs");

// fs.writeFileSync("coffee.txt", "우유 1 두유 2 초코 2", "utf-8");
const data = fs.readFileSync("student.json", "utf-8");
console.log(JSON.parse(data).capacity);
