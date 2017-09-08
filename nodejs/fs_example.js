var fs = require("fs");


//read async
/*
fs.readFile("foo.html", function(err, data) {
     if(err) {
         return console.log(err);
     }

     console.log(data.toString());
});*/


//read sync
/*var data = fs.readFileSync("foo.html");
console.log(data.toString()); */

//read async with fd (file descriptor)
/*fs.open("foo.html", "r", function(err, fd) {
     if(err) {
         return console.log(err);
     }
     var buf = new Buffer(1024);
     fs.read(fd, buf , 0, buf.length, 0, function(err, bytes) {
          if(err) return console.log(err);
          console.log(buf.slice(0, bytes).toString());
     });
     fs.close(fd, function(err) {
         return console.log(err);
     });
});*/


//readdir
/*fs.readdir("/tmp/", function(err, files) {
    if(err) return console.log(err);
    files.forEach(function(file) {
        console.log(file);
    });
});*/


//mkdir
dirpath = "/tmp/test/";
fs.mkdir(dirpath, function(err) {
     if(err) return console.log(err);
});


outfile =  dirpath+"file1.txt";
var content = [
    "edutilos aghayev",
    "pako deko",
    "cristiano ronaldo",
    "conor mcgregor",
    "leonel messi"
];
fs.writeFile(outfile, "hello world\n", function(err) {
   if(err) return console.log(err);
});

for(var c of content) {
    fs.appendFile(outfile, c+"\n", function(err) {
        if(err) return console.log(err);
    });
}

fs.readdir(dirpath, function(err, files) {
    if(err) return console.log(err);
    files.forEach(function (file){
         console.log(file);
    });
});

fs.readFile(outfile, function(err, data) {
    if(err) return console.log(err);
    console.log(data.toString());
});


/*

 Method	Description
 stats.isFile()	Returns true if file type of a simple file.
 stats.isDirectory()	Returns true if file type of a directory.
 stats.isBlockDevice()	Returns true if file type of a block device.
 stats.isCharacterDevice()	Returns true if file type of a character device.
 stats.isSymbolicLink()	Returns true if file type of a symbolic link.
 stats.isFIFO()	Returns true if file type of a FIFO.
 stats.isSocket()
 */
console.log("<<stats>>");
fs.stat(outfile, (err, stats) => {
     if(err) return console.log(err);
     console.log(stats);
    console.log(`isFile = ${stats.isFile()}`);
    console.log(`isDirectory = ${stats.isDirectory()}`);
    console.log(`isBlockDevice = ${stats.isBlockDevice()}`);
    console.log(`isCharacterDevice = ${stats.isCharacterDevice()}`);
    console.log(`isSymbolicLink = ${stats.isSymbolicLink()}`);
    console.log(`isFIFO = ${stats.isFIFO()}`);
    console.log(`isSocket = ${stats.isSocket()}`);
});

fs.unlink(outfile, function(err) {
    if(err) return console.log(err);
});
fs.rmdir(dirpath, function(err) {
    if(err) return console.log(err);
});




