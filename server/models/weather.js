const request = require('request-promise');

const API_KEY = "f485b5c44aff4f3d57233d3caa5ced39"



class Weather {
  static retrieveByCity (city, callback) {
    request({
      //uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`,
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Weather;