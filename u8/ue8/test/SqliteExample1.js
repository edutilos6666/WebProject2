var sqlite3 = require("sqlite3").verbose();

var dbname = "example1.db";
var db = new sqlite3.Database(dbname);
db.serialize(function() {
db.run("drop table if exists Worker");
    db.run("create table if not exists Worker(id int primary key , name varchar(50) not null)");
    var stmt = db.prepare("insert into Worker values(?,?)");

    for (var i = 1; i < 4; ++i) {
        stmt.run(i, "foo" + i);
    }
    stmt.finalize();

    db.each("select id , name from Worker", function (err, row) {
        console.log(row.id, row.name);
    });

    stmt = db.prepare("update Worker set name = ? where id = ?");
    stmt.run("new_foo", 1);
    stmt.finalize();

     db.all("select * from Worker where id = 1", function(err, rows) {
         console.log(rows[0].id, rows[0].name);
     });

});
db.close();
