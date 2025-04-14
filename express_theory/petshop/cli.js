fetch("http://localhost:3000/dog", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "롯데",
    age: 5,
    gender: "female",
    species: "폼푸",
  }),
})
  .then((v) => v.json())
  .then((v) => console.log(v));
