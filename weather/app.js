//app.js

const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather/weather.js');

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

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//       console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather();
