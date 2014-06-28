var request = require("request");

var makeRequest = function(method, params, callback, config) {
    var req = {
        "jsonrpc": "2.0",
        "method": method,
        "id": 1,
    };
    if (params && Object.keys(params).length > 0) {
        req['params'] = params;
    }
    var urlenc = 'http://' + config.XbmcHost + ":" + config.XbmcPort + '/jsonrpc?' + method;
    if (config.DebugLogging) {
        console.log(urlenc);
    }
    var options = {
        'url': urlenc,
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(req)
    };

    request(options, function(err, response, body) {
        if (err === null) {
            body = JSON.parse(body);
            callback(body.result, err);
        } else {
            callback(err, null);
        }
    });
};

var callMethodFactory = function(methodName, config) {
    return function(params, callback) {
        return makeRequest(methodName, params, callback, config);
    }
}

module.exports = function(config) {
    var methods = require('./xbmcrpc.json');
    var generated = {}
    for (var method in methods.result.methods) {
        if (config.DebugLogging) {
            console.log(method);
        }
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