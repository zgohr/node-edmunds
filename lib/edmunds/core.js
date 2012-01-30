
var http = require('http');

var Edmunds = exports.Edmunds = function (api_key) {
  this._api_key = api_key;
  this._api_version = "v1";
  this._base_url = "api.edmunds.com";
  this._response_format = "json";
};

var proto = Edmunds.prototype;

proto.getBaseUrl = function () {
  return this._base_url;
};

proto.getVersion = function() {
  return this._api_version;
};

proto._serializeParams = function(params) {
  var str = '';
  for(var key in params) {
    if(params.hasOwnProperty(key)) {
      if(str !== '') str += "%";
      str += key + "=" + params[key];
    }
  }
  return str;
};

proto.invoke = function(method, params, callback) {
  var result = '';
  var qs = this._serializeParams(params);
  var url = this.getBaseUrl();
  qs = (qs) ? '?' + qs + '&api_key=' + this._api_key + "&fmt=" + this._response_format : '?api_key=' + this._api_key + "&fmt=" + this._response_format;
  var options = {
    host: url,
    port: 80,
    path: '/' + this.getVersion() + method + qs
  }
  var request = http.get(options, function(res) {
    res.on('data', function(chunk) {
      result += chunk;
    });
    res.on('end', function() {
      callback(result);
    });
  });
};
