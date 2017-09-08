var mysql = require("mysql")


var conn = mysql.createConnection({
  host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});

var tableName = "NodePerson";
var NodePerson = require("./NodePerson");

conn.connect(function(err) {
    if(err) throw err ;
    console.log("Connection success.");


    //drop table
    var sql = `drop table if exists ${tableName}`;
    conn.query(sql , function(err, result) {
        if(err) throw err ;
        console.log("dropped table successfully.");
    });

    //create table
    sql = `create table if not exists ${tableName} (
     id bigint primary key auto_increment , 
     name varchar(50) not null, 
     age int not null, 
     wage double not null, 
     active boolean not null 
    )`;
    conn.query(sql, function(err, result) {
         if(err) throw err ;
         console.log("created table successfully.");
    });

    //insert
    var people = [
        new NodePerson(1, "foo", 10, 100.0, true),
        new NodePerson(2, "bar", 20 , 200.0, false),
        new NodePerson(3, "bim", 30, 300.0, true)
    ];

    for(var person of people) {
        sql = `insert into ${tableName} (name, age, wage, active) values 
        ("${person.name}", ${person.age}, ${person.wage}, ${person.active})`;
        conn.query(sql , function(err, result) {
            if (err) throw err ;

        });
    }


    function mapRowDataPacketToNodePerson(row) {
        var id = row.id ,
            name = row.name ,
            age = row.age,
            wage = row.wage ,
            active = row.active;
        return new NodePerson(id, name, age, wage, active);
    }

    //select
    sql = `select * from ${tableName}`;
    conn.query(sql , function(err, result, fields) {
        if(err) throw err ;
        for(var row of result) {
            console.log(mapRowDataPacketToNodePerson(row).toString());
        }
    });

    //find by id
    var id = 1 ;
    sql = `select * from ${tableName} where id = ${id}`;
    conn.query(sql, function(err, result, fields){
        if(err) throw err ;
        console.log(mapRowDataPacketToNodePerson(result[0]).toString());
    });


    //update
    id = 1 ;
    var name =  "new_foo",
        age = 66,
        wage = 666.6 ,
        active = true ;
    sql = `update ${tableName} set name = "${name}", age = ${age}, 
    wage = ${wage}, active = ${active} where id = ${id}`;
    conn.query(sql, function(err, result) {
        if(err) throw err ;

    });

    id = 1 ;
    sql = `select * from ${tableName} where id = ${id}`;
    conn.query(sql, function(err, result) {
        if(err) throw err ;
        console.log("after update = ", mapRowDataPacketToNodePerson(result[0]).toString());
    });


    //delete
    id = 1 ;
    sql = `delete from ${tableName} where id = ${id}`;
    conn.query(sql, function(err, result) {
        if(err) throw err ;

    });
    sql = `select * from ${tableName}`;
    conn.query(sql, function(err, result) {
        if(err) throw err ;
        console.log("<<After delete>>");
        for(var row of result) {
            console.log(mapRowDataPacketToNodePerson(row).toString());
        }
    });
    //destroy conn
   // conn.destroy();

});


