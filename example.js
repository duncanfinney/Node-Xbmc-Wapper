var serviceDefinition = require('xbmcrpc.json');
var config = {
	"XbmcHost": "127.0.0.1",
	"XbmcPort": 8081,
	"DebugLogging": true,
    "XbmcServiceDefinition": serviceDefinition
}
var xbmc = require('lib/xbmc.js')(config);
xbmc.JSONRPC.Introspect({}, function(err, results) {
    console.log(results);
});