var jade = require("jade");
var filename = "layouts/example4.jade";

var compileFunc = jade.compileFile(filename);
var html = compileFunc({pageTitle:"example4.jade"});
console.log(html);