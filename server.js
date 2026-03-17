const express = require("express");
const app = express();

app.use(express.json());

let sensors = {
  airHumidity: null,
  soilHumidity: null,
  temperature: null,
  gas: null,
  light: null
};

app.get("/", (req, res) => {
  res.json({ message: "API capteurs OK" });
});

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

app.get("/data", (req, res) => {
  res.json(sensors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
