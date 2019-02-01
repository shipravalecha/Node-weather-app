const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=ub16KNiW7c4AstIssm5FJKSvkySU5dij&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if(error) {
        reject('unable to get response from google servers');
      } else if(body.results[0].locations.street === " ") {
        reject('unable to find that address');
      } else {
        resolve({
          Address: body.results[0].locations[0].adminArea5 + ' ' + body.results[0].locations[0].adminArea3 + ' ' + body.results[0].providedLocation.location + ' ' + body.results[0].locations[0].adminArea1,
          Latitude: body.results[0].locations[0].latLng.lat,
          Longitude: body.results[0].locations[0].latLng.lng
        });
      }
    });
  });
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
