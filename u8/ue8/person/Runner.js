var Person = require("./Person");
var PersonDAO = require("./PersonDAO");
function testPerson() {
   var p1 = new Person(1, "foo", 10 , 100.0, true);
   console.log(p1.toString());
}

function testPersonDAO() {
    var dao = new PersonDAO();
    dao.save(new Person(1, "foo", 10, 100.0, true));
    dao.save(new Person(2, "bar", 20 , 200.0, false));
    dao.findAll();

    dao.update(1, new Person(1, "new_foo", 66, 666.6, false));
    dao.findAll();
}


testPersonDAO();