var http = require("http");
var fs = require("fs");

class MyRouter {
    constructor() {
    }

    serve(url) {
        switch(url) {
            case "foo":
                return this.serveFooFile();
            case "bar":
                return this.serveBarFile();
            case "bim":
                return this.serveBimFile();
            default:
                return "<h1>Default msg</h1>";
        }
    }


    serveFooFile() {
       var filename = "foo.html";
       return fs.readFileSync(filename).toString();
    }

    serveBarFile() {
        var filename = "bar.html";
        return fs.readFileSync(filename).toString();
    }

    serveBimFile() {
        var filename = "bim.html";
        return fs.readFileSync(filename).toString();
    }
}

var router = new MyRouter();
var server = http.createServer(function(req, res) {
     //console.log(req);
     var url = req.url.substring(1) ;
     console.log(url);
    var options = {
        "Content-Type": "text/html"
     };
     res.writeHead(200, options);
     res.end(router.serve(url));
});

server.listen(8080, function() {
     console.log("Server is listening on port 8080");
});