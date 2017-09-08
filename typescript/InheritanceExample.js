var CustomFile = (function () {
    function CustomFile(fileName, flags) {
        this.fileName = fileName;
        this.flags = flags;
    }
    CustomFile.prototype.isReadable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(r) == 4;
    };
    CustomFile.prototype.isWritable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(w) == 2;
    };
    CustomFile.prototype.isExecutable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(x) == 1;
    };
    return CustomFile;
}());
function testCustomFile() {
    var file = new CustomFile("foobar.txt", "4,2,1");
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
    file = new CustomFile("foobar.txt", "4,0,0");
    console.log();
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
}
testCustomFile();
function testRunOptions() {
    var ro1 = {
        program: "foo.exe",
        commandline: "name=foo"
    };
    console.log(ro1.program, " and ", ro1.commandline);
    var ro2 = {
        program: "foo.exe",
        commandline: ["name='foo'", "age=10", "wage=100.0"]
    };
    console.log(ro2.program, " and ", ro2.commandline);
    var ro3 = {
        program: "foo.exe",
        commandline: function () { return "hello world!"; }
    };
    console.log(ro3.program, " and ", ro3.commandline());
}
testRunOptions();
