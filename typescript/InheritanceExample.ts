interface Readable {
    isReadable():Boolean;
}

interface Writable {
    isWritable():Boolean;
}

interface Executable {
    isExecutable(): Boolean ;
}



class CustomFile implements  Readable, Writable, Executable {
    private fileName:string;
    private flags:string ;
    public constructor(fileName:string , flags:string) {
        this.fileName = fileName;
        this.flags = flags ;
    }

    isReadable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(r) == 4;
    }

    isWritable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(w) == 2;
    }

    isExecutable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(x) == 1;
    }

}



function testCustomFile() {
    var file:CustomFile = new CustomFile("foobar.txt", "4,2,1");
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



interface RunOptions {
    program:string ;
    commandline:string|string[]|(()=>string);
}


function testRunOptions() {
    var ro1 = {
       program:"foo.exe",
        commandline: "name=foo"
    };

    console.log(ro1.program, " and ", ro1.commandline);

    var ro2 = {
        program:"foo.exe",
        commandline: ["name='foo'","age=10","wage=100.0"]
    };

    console.log(ro2.program, " and ", ro2.commandline);

    var ro3 = {
        program:"foo.exe",
        commandline: ()=> "hello world!"
    }

    console.log(ro3.program, " and ", ro3.commandline());
}


testRunOptions();

