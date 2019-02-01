const request = require('request');

var getWeather = (lat, lon, callback) => {

  request({
    url: `https://api.darksky.net/forecast/68df91762c255746eb445bb38ab0b641/${lat},${lon}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('unable to connect to forecast io servers');
    } else if(response.statusCode === 400) {
      callback('unable to fetch weather');
    } else if(response.statusCode === 200) {
        var obj = {
          actualTemperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        };
      callback(undefined, obj);
    }
  });
};

module.exports.getWeather = getWeather;
