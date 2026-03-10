const express = require("express");
const app = express();

app.use(express.json());

let sensor = 0;

// route test
app.get("/", (req, res) => {
  res.json({ message: "API Arduino OK" });
});

// enregistrer valeur capteur
app.get("/sensor", (req, res) => {
  const value = req.query.value;

  if (value === undefined) {
    return res.status(400).json({
      error: "aucune valeur envoyée"
    });
  }

  sensor = value;

  console.log("Nouvelle valeur capteur :", sensor);

  res.json({
    status: "valeur enregistrée",
    sensor: sensor
  });
});

// lire la valeur
app.get("/data", (req, res) => {
  res.json({
    sensor: sensor
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
