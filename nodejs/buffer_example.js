var buf1 = new Buffer("foobar ");

console.log(buf1.toString());
console.log(buf1.toJSON());


var buf2 = new Buffer("hello world");
var bufConcatted =  Buffer.concat([buf1, buf2]);
console.log(bufConcatted.toString());



console.log(buf1.compare(buf2));


var bufCopy = new Buffer(bufConcatted.length);
bufConcatted.copy(bufCopy, 0 ,0,  bufCopy.length);
console.log(bufCopy.toString());


console.log(bufConcatted.slice(0,6).toString());