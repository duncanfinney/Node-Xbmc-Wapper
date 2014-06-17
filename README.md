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
var parameters = {
  //see JSONRPC documentation for what options there are
}
xbmc.VideoLibrary.GetMovies(parameters, function(retVal) {
  //callback
});

```


Version
----

0.88

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
