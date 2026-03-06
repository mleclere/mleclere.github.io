const express = require("express");
const app = express();

let sensor = 0;

app.get("/", (req, res) => {
  res.send("API Arduino OK");
});

app.get("/sensor", (req, res) => {
  sensor = req.query.value;
  res.send("valeur enregistrée");
});

app.get("/data", (req, res) => {
  res.json({ sensor });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
