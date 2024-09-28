const express = require('express');
const client = require('prom-client');

const app = express();

const register = new client.Registry();

const temperatureGauge = new client.Gauge({
  name: 'weather_temperature_celsius',
  help: 'Température actuelle en degrés Celsius',
});

const humidityGauge = new client.Gauge({
  name: 'weather_humidity_percent',
  help: 'Humidité actuelle en pourcentage',
});

register.registerMetric(temperatureGauge);
register.registerMetric(humidityGauge);

app.get('/metrics', async (req, res) => {

  temperatureGauge.set((Math.random() * 45) - 10);
  humidityGauge.set(Math.random() * 100);

  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur ${PORT}`);
});
