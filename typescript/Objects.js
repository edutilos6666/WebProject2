var person = {
    fname: "foo",
    lname: "bar",
    age: 10,
    wage: 100.0,
    setFname: function (fname) {
        this.fname = fname;
    },
    setLname: function (lname) {
        this.lname = lname;
    },
    setAge: function (age) {
        this.age = age;
    },
    setWage: function (wage) {
        this.wage = wage;
    },
    getFname: function () {
        return this.fname;
    },
    getLname: function () {
        return this.lname;
    },
    getAge: function () {
        return this.age;
    },
    getWage: function () {
        return this.wage;
    },
    toString: function () {
        return this.fname + ", " + this.lname + ", " + this.age + ", " + this.wage;
    }
};
console.log(person.toString());
person.setFname("new_foo");
console.log(person.toString());
function printPerson(obj) {
    console.log(obj.toString());
}
printPerson(person);
function printName(obj) {
    console.log(obj.fname, " , ", obj.lname);
}
printName({ fname: "edu", lname: "tilos" });
printName(person);
