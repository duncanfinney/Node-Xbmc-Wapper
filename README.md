Xbmc Wrapper
=========

Xbmc Wrapper is an ultra-minimalistic wrapper for the XBMC JSON-RPC API. Unlike other wrappers, functions are generated dynamically from the services JSONRPC.Introspect endpoint

Advantages

  - Functions are generated dynamically on the fly
  - Access to all 273 api calls in under 100 lines of code!
 
Example  
-------
 
To call the [VideoLibrary.GetMovies] function
```JavaScript
var config = {
	"XbmcHost": "127.0.0.1",
	"XbmcPort": 8081,
	"DebugLogging": true
}
var xbmc = require('Xbmc-Wrapper');
//See JSON-RPC documentation for full list of available parameters
var parameters = {
  properties: [
    "title",
    "genre",
    "year",
    "rating"
  ]
};
xbmc.VideoLibrary.GetMovies(parameters, function(retVal) {
  //callback
});
```

Full specification of the XBMC JSON-RPC available functions can be found [here].


Version
----

1.0.0

Dependencies
-----------

Xbmc Wrapper has only one small dependency. 

* [Request] - Simplified HTTP request client by [mikeal]

License
----

The MIT License (MIT)

[Request]:https://github.com/mikeal/request
[mikeal]:https://github.com/mikeal
[VideoLibrary.GetMovies]:http://wiki.xbmc.org/?title=JSON-RPC_API/v6#VideoLibrary.GetMovies
[here]:http://wiki.xbmc.org/?title=JSON-RPC_API/v6
