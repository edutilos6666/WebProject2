/*
 os.tmpdir()
 os.endianness()
 os.hostname()
 os.type()
 os.platform()
 os.arch()
 os.release()
 os.uptime()
 os.loadavg()
 os.totalmem()
 os.freemem()
 os.cpus()
 os.networkInterfaces()

 */

 var os = require("os");
 console.log("tmpdir = ", os.tmpdir());
 console.log("endianness = ", os.endianness());
 console.log("hostname = ", os.hostname());
 console.log("type = ", os.type());
 console.log("platform = ", os.platform());
 console.log("arch = ", os.arch());
 console.log("release = ", os.release());
 console.log("uptime = ", os.uptime());
 console.log("loadavg = ", os.loadavg());
 console.log("totalmem = ", os.totalmem());
 console.log("freemem = ", os.freemem());
 console.log("cpus = ", os.cpus(),  "\n# of cpus = ", os.cpus().length);
 console.log("networkInterfaces = ", os.networkInterfaces(), "\n # of lo networkInterfaces = ", os.networkInterfaces().lo.length);
 console.dir("EOL = ", os.EOL);

 process.stdout.write(`hello${os.EOL}`);
process.stdout.write(`hello${os.EOL}`);