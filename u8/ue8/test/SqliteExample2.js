var sqlite3 = require("sqlite3").verbose();
var dbname = "example1.db";

var db = new sqlite3.Database(dbname);


class Person {
    constructor(id , name, age, wage) {
        this.id = id ;
        this.name = name;
        this.age = age ;
        this.wage = wage ;
    }

    toString() {
        return this.id + ", "+ this.name + ", "+ this.age + ", "+ this.wage ;
    }
}



db.serialize(function() {
    db.run("drop table if exists Person");
    db.run("create table if not exists Person(" +
        "id int primary key, " +
        "name varchar(50) not null, " +
        "age int not null, " +
        "wage real not null)");
    var stmt = db.prepare("insert into Person VALUES(?,?,?,?)");
    var people = new Array(
       new Person(1, "foo",10, 100.0),
        new Person(2, "bar", 20 , 200.0),
        new Person(3, "bim", 30, 300.0)
    );

    for(var person of people) {
        stmt.run(person.id, person.name, person.age, person.wage);
    }

    stmt.finalize();

    console.log("<<after insert>>");
    db.each("select * from Person", function(err, row) {
        var p =  new Person(row.id, row.name, row.age, row.wage);
        console.log(p.toString());
    });



    stmt = db.prepare("update Person set name = ? , age = ? , wage = ? where id = ?");
    stmt.run("new_foo", 66, 666.6, 1);
    stmt.finalize();

    db.all("select * from Person where id = 1", function(err, rows) {
        console.log("<<after update>>");
        var row = rows[0];
        var p = new Person(row.id, row.name, row.age, row.wage);
        console.log(p.toString());
    });


    stmt = db.prepare("delete from Person where id= ?");
    stmt.run(1);
    stmt.finalize();
    db.all("select * from Person", function(err, rows) {
        console.log("<<after delete>>");
        for(var row of rows) {
            var p = new Person(row.id, row.name, row.age , row.wage);
            console.log(p.toString());
        }
    });


});

db.close();

