exports.getData = async (event) => {
  // Load the package
  const axios = require('axios');

  // Get latitude and longitude
  const latitude = event.message.latitude;
  const longitude = event.message.longitude;

  // OpenWeatherAPI
  const openWeatherAPI = process.env.WEATHER_API;

  // OpenWeatherURL
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=ja&appid=${openWeatherAPI}`;

  const weatherData = await axios.get(openWeatherURL);
  return weatherData;
};
