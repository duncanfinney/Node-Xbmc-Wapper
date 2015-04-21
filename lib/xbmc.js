var request = require("request");

var requestFactory = function(method, params, callback, config) {
  var req = {
    jsonrpc: "2.0",
    method: method,
    id: 1,
  };
  if (params) {
    req.params = params;
  }

  var options = {
    url: 'http://' + config.XbmcHost + ":" + config.XbmcPort + '/jsonrpc?' + method,
    method: 'POST',
    headers: {
      Content-Type: 'application/json'
    },
    body: JSON.stringify(req)
  };

  request(options, callback);
};

var callMethodFactory = function(methodName, config) {
  return function(params, callback) {
    return requestFactory(methodName, params, callback, config);
  }
}

module.exports = function(config) {
  var methods = require('./xbmcrpc.json');
  var generated = {}
  for (var method in methods.result.methods) {
    var split = String(method).split('.');
    var namespace = split[0];
    var methodName = split[1];
    if (generated[namespace] === undefined) {
        generated[namespace] = {}
    }
    generated[namespace][methodName] = callMethodFactory(method, config);
  }
  return generated;
}
