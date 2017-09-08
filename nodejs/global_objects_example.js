console.log(__filename);
console.log(__dirname);

var t = setTimeout(()=> {
    console.log("hello world");
}, 1000);


clearTimeout(t);

// interval
/*
var counter = 0 ;
var i = setInterval(()=> {
    console.log("hello world");
    counter++;
    if(counter == 3) clearInterval(i);
}, 1000);

*/


//Console object
/*
console.log("log: hello");
console.info("info: hello");
console.warn("warn: hello");
console.error("error: hello");
console.dir("dir: hello");
console.trace("trace: hello");

console.error("error: hello");
console.assert(10 == 10, "hello");  // if expr == false => msg will be printed

console.time("time: hello");
console.timeEnd("time: hello");  //time: hello is label , and must be the same in .time()
// and .timeEnd()
*/

//process object
process.stdout.write("hello world\n");
process.stdout.write("hello world\n");

/*
 stdout
 stderr
 stdin
 argv
 execPath
 execArgv
 env
 exitCode
 version
 versions
 config
 pid
 title
 arch
 platform
 mainModule
 */

process.argv.forEach((val, index , arr) => {
     console.log(index , "= ", val , " : ", arr);
});

console.log();
console.log("execPath = ", process.execPath);
console.log("execArgv = ", process.execArgv);
console.log("env = ", process.env);
console.log("exitCode = ", process.exitCode);
console.log("version = ", process.version);
console.log("versions = ", process.versions);
console.log("config = ", process.config);
console.log("pid = ", process.pid);
console.log("title = ", process.title);
console.log("arch = ", process.arch);
console.log("platform = ", process.platform);
console.log("mainModule = ", process.mainModule);


console.log("cwd() = ", process.cwd());
console.log("memoryUsage() = ", process.memoryUsage());