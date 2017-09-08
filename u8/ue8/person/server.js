var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



var PersonDAO = require("./PersonDAO");
var Person = require("./Person");
var personDAO = new PersonDAO();

app.use("/jade", express.static("jade"));
app.use("/html", express.static("html"));

app.set("view engine", "jade");
app.get("/", function(req, res) {
    res.render("index", {});
});

app.get("/person/all", function(req,res) {
    personDAO.findAllWithRes(res);
});



app.get("/person/all/json", function(req, res) {
    personDAO.findAllWithResAndJson(res);
});

app.route("/person/create")
    .get(function(req,res) {
    console.log("GET /person/create");
    res.render("personCreate");
}).post(function(req, res) {
 var id = req.body.id ,
 name = req.body.name,
 age = req.body.age ,
 wage = req.body.wage,
 active = req.body.active;

 var p = new Person(id, name, age, wage, active);
 personDAO.saveWithRes(p, res);
 });



app.get("/person/update/:id", function(req, res) {
   var id = req.params.id ;
   personDAO.prepareUpdateWithRes(id, res);
});

app.post("/person/update", function(req, res) {
    console.log("name = ", req.body);
/*   var id = req.params.id ,
       name = req.params.name ,
       age = req.params.age ,
       wage = req.params.wage ,
       active = req.params.active;*/
    var id = req.body.id ,
        name = req.body.name ,
        age = req.body.age ,
        wage = req.body.wage ,
        active = req.body.active;

   var p = new Person(id, name, age, wage, active);
   personDAO.updateWithRes(id, p, res);
});


app.get("/person/remove/:id", function(req, res) {
   var id = req.params.id ;
   personDAO.removeWithRes(id, res);
});







app.get("/sampleJson", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    var person = {
       id: 1,
        name: "foo",
        age: 10 ,
        wage : 100.0 ,
        active:true
    };
    res.send(JSON.stringify(person));
});


app.get("/person/json", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    var person = new Person(1, "foo", 10 , 100.0, true);
    res.send(JSON.stringify(person.convertToJson()));
});




app.get("/person/:id", function(req,res) {
    console.log("GET /person/:id");
    var id = req.params.id ;
    personDAO.findByIdWithRes(id , res);
});


app.listen(8080, function() {
     console.log("express server is listening on port 8080");
});