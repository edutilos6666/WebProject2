var fs = require("fs");

var data = "";


//read stream
/*
var reader = fs.createReadStream("foo.html");
reader.setEncoding("UTF-8");
reader.on("data", function(chunk) {
     data += chunk;
});

reader.on("end", function() {
    console.log(data);
});


reader.on("error", function(err) {
    console.log(err);
});*/

//write stream
/*
var writer = fs.createWriteStream("out.txt");
//writer.setEncoding("UTF-8");
writer.write("hello world\n", "UTF-8");
writer.end();
writer.on("finish", function() {
    console.log("success");
});

writer.on("error", function(err) {
     console.log(err);
});
*/



// pipe streams
/*var filename = "foo.html";
var filename2 = "out.html";
var reader = fs.createReadStream(filename);
var writer = fs.createWriteStream(filename2);
reader.pipe(writer);*/


//create .gz compressed file
/*
var zlib = require("zlib");
fs.createReadStream("foo.html")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("out.tar.gz"));*/

//read content of .gz compressed file
var zlib = require("zlib");
fs.createReadStream("out.tar.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("in.html"));
