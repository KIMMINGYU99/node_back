fetch("http://localhost:3000/boardGame", {
  method: "post",
  body: "블리츠",
  headers: {
    "Content-Type": "text/plain",
  },
})
  .then((v) => v.json())
  .then((v) => console.log(v));
