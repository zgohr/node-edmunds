# node-edmunds is a server side SDK for the Edmunds developer API

node-edmunds is not affiliated with Edmunds

This is a derivative work of the client side JavaScript SDK found [here][client-side]

More info can be found [here][edmunds-site].
## Installation
Currently this project is not in npm, so clone it into your node_modules
## Getting started

As of version 0.0.1, only part of the Vehicle API is supported.

``` js
var edmunds = require('edmunds');

var vehicle_api_key = 'XXXX';

var client = edmunds.createVehicleClient(vehicle_api_key);
client.getListOfMakes(function (result) {
console.log(result);
});
```

## Roadmap
1. Finish the Vehicle API and tests
2. Inventory API
3. Dealer API

[edmunds-site]: http://developer.edmunds.com/ "Edmunds Website"
[client-side]: https://github.com/edmunds/edmunds-javascript-sdk "Edmunds Client Side SDK"
