const { dogs } = require("./dogs.js");
const express = require("express");
const app = express();
app.use(express.text());
app.use(express.json());

app.get("/dogs", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;

  const hasQuery =
    minAge !== undefined || maxAge !== undefined || gender !== undefined;
  const newDogs = dogs
    .filter((v) => v.age >= +minAge && v.age <= +maxAge)
    .filter((v) => !gender || v.gender == gender);

  res.json(hasQuery ? newDogs : dogs);
});

app.post("/dog", (req, res) => {
  const { name, age, gender, species } = req.body;
  const newDog = {
    name,
    age,
    gender,
    species,
  };
  dogs.push(newDog);
  console.log(dogs);
  res.json(dogs);
});

app.listen(3000, () => {
  console.log("서버시작");
});
