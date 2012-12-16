
var http = require('http'),
    util = require('util');

function EdmundsError(code, message, body, constructorOpt) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, constructorOpt || EdmundsError);

  code = parseInt(code, 10);

  this.message = message || '';
  this.body = body || message || '';
  this.statusCode = this.httpCode = code;
}
util.inherits(EdmundsError, Error);
EdmundsError.prototype.name = 'EdmundsError';


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
  var tail = [];
  for(var key in params) {
    if(params.hasOwnProperty(key)) {
      tail.push(key + "=" + encodeURIComponent(params[key]));
    }
  }
  return tail.join("&");
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
  };

  var request = http.get(options, function(res) {
    res.on('data', function(chunk) {
      result += chunk;
    });
    res.once('end', function() {
      var obj;
      try {
        if (result) {
          obj = JSON.parse(result);
        } else {
          obj = {};
        }
      } catch (e) {
        return callback(e, null);
      }

      var err;
      if (res && res.statusCode >= 400) {
        err = new EdmundsError(res.statusCode,
            '',
            {
              code: obj.code || obj.error.code || 'Error',
              message: obj.message || obj.error.message || 'Unknown error'
            });
      }

      if (err)
        err.body = obj;

      return callback((err || null), obj);
    });
  });
};
