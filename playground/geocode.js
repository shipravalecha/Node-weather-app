const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

  console.log(encodedAddress);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=ub16KNiW7c4AstIssm5FJKSvkySU5dij&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2));
    if(error) {
      callback('unable to get response from google servers');
    } else if(body.results[0].locations.street === " ") {
      callback('unable to find that address');
    } else {
      callback(undefined, {
        Address: body.results[0].locations[0].adminArea5 + ' ' + body.results[0].locations[0].adminArea3 + ' ' + body.results[0].providedLocation.location + ' ' + body.results[0].locations[0].adminArea1,
        Latitude: body.results[0].locations[0].latLng.lat,
        Longitude: body.results[0].locations[0].latLng.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
