var express = require("express");
var app = express();


var myLogger = function(req, res, next) {
   var date = new Date();
   console.log("received %s in %s", req.method , date);
   next();
};

app.use(myLogger);

app.get("/", function(req, res) {
     res.send("<h1>Hello World by express.js</h1>");
});

app.get("/edu(tilo)?s", function(req, res){
     res.send("can get request from edus, and edutilos");
});

app.get("/pako", function(req, res) {
     res.send("/pako was requested.");
});


app.get("/person/:id/:name/:age/:wage", function(req, res) {
    var id = parseInt(req.params.id),
        name = req.params.name,
        age = parseInt(req.params.age),
        wage = parseFloat(req.params.wage);

    var ret = id + " ; "+ name + " ; " + age + " ; "+ wage ;
    res.send(ret);
});


var cb0 = function(req, res, next) {
    console.log("cb0 was called.");
    next();
};

var cb1 = function(req, res, next) {
    console.log("cb1 was called.");
    next();
};

var cb2 = function(req, res){
    console.log("cb2 was called.");
    res.send("cb0 , cb1 and cb2 were called.");
};


app.get("/callbacks", [cb0, cb1, cb2]);


app.route("/book")
    .get(function(req, res) {
        res.send("get /book");
    })
    .post(function(req, res) {
        res.send("post /book");
    })
    .put(function(req, res){
        res.send("put /book");
    })
    .delete(function(req, res){
        res.send("delete /book");
    })
    .options(function(req, res) {
        res.send("options /book");
    });
//route.head() does not return anything in res .

app.listen(8080, function() {
     console.log("App is listening on port 8080.");
});

