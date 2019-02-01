//app.js

// this is where we make http request via axios library instead of request// with axios, we have promise returned from it so
// can use .then therein itself

const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=ub16KNiW7c4AstIssm5FJKSvkySU5dij&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('unable to find the address');
  }
  var lat = response.data.results[0].locations[0].latLng.lat;
  var lng = response.data.results[0].locations[0].latLng.lng;
  var weatherUrl = `https://api.darksky.net/forecast/68df91762c255746eb445bb38ab0b641/${lat},${lng}`;

  console.log(response.data.results[0].locations[0].adminArea5 + ' ' + response.data.results[0].locations[0].adminArea3 + ' ' + response.data.results[0].providedLocation.location + ' ' + response.data.results[0].locations[0].adminArea1);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It is currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((errorMessage) => {
  if(errorMessage.code === 'ENOTFOUND' ) {
      console.log('unable to connect to API servers');
  }
  else {
    console.log(errorMessage.message);
  }
});
