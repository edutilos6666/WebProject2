var express = require("express");
var app = express();

var jade = require("jade");

var options = []
var locals = []
/*var renderFunc = jade.compileFile("layouts/example1.jade");
var html = renderFunc({pageTitle: "example1.jade", youAreUsingJade:true});*/

/*var renderFunc = jade.compileFile("layouts/example2.jade");
var html = renderFunc({pageTitle:"example2.jade", age:11});*/


/*var renderFunc = jade.compileFile("layouts/example3.jade");
var html = renderFunc({pageTitle:"example3.jade"});*/

class Person {
    constructor(id, name, age, wage) {
        this.id = id ;
        this.name = name;
        this.age = age;
        this.wage = wage;
    }
}

var people = [
    new Person(1, "foo", 10 , 100.0),
    new Person(2, "bar", 20, 200.0),
    new Person(3, "bim", 30, 300.0)
];

var renderFunc = jade.compileFile("layouts/people.jade");
var html = renderFunc({pageTitle:"people.jade", people:people});

console.log(html);