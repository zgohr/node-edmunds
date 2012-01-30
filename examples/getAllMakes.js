
var edmunds = require('../lib/edmunds');

var vehicle_api_key = 'XXXX';
var client = edmunds.createVehicleClient(vehicle_api_key);

client.getListOfMakes(function (result) {
  console.log(result);
});
