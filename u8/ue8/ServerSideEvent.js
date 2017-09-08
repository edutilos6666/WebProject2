var http = require("http");
var sleep = require("sleep");

var server = http.createServer(function(req, res) {
    while(true) {
        res.writeHead(200, {'Content-Type':'text/event-stream'});
        res.write("Event: helloWorldEvent\n");
        res.end("hello world");
        sleep.msleep(5);
    }
});


server.listen(8080);
