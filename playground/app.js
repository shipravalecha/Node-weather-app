//app.js

const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather.js');

const argv = yargs
.options({
a: {
  demand: true,
  alias: 'address',
  describe: 'address to fetch weather for',
  string: true
}
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
       console.log(results.Address);
      weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
          console.log(errorMessage);
        }
        else {
          console.log(`Actual temperature is ${weatherResults.actualTemperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
      });

  }
});
