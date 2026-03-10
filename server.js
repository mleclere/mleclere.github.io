const express = require("express");
const app = express();

app.use(express.json());

// stockage des valeurs
let sensors = {
  airHumidity: null,
  soilHumidity: null,
  temperature: null,
  gas: null,
  light: null
};

// route test
app.get("/", (req, res) => {
  res.json({ message: "API capteurs OK" });
});

// recevoir les données des capteurs
app.get("/sensor", (req, res) => {
  const { airHumidity, soilHumidity, temperature, gas, light } = req.query;

  if (airHumidity !== undefined) sensors.airHumidity = airHumidity;
  if (soilHumidity !== undefined) sensors.soilHumidity = soilHumidity;
  if (temperature !== undefined) sensors.temperature = temperature;
  if (gas !== undefined) sensors.gas = gas;
  if (light !== undefined) sensors.light = light;

  console.log("Nouvelles données :", sensors);

  res.json({
    status: "données enregistrées",
    sensors: sensors
  });
});

// lire toutes les données
app.get("/data", (req, res) => {
  res.json(sensors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
