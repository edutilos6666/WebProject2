var Person = (function () {
    function Person(id, name, age, wage, active) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.wage = wage;
        this.active = active;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setWage = function (wage) {
        this.wage = wage;
    };
    Person.prototype.getWage = function () {
        return this.wage;
    };
    Person.prototype.setActive = function (active) {
        this.active = active;
    };
    Person.prototype.isActive = function () {
        return this.active;
    };
    Person.prototype.toString = function () {
        return "[" + this.id + ", " + this.name + " , " + this.age + " , " + this.wage + " , " + this.active + "]";
    };
    return Person;
}());
var p1 = new Person(1, "foo", 10, 100.0, true);
console.log(p1.toString());
p1.setName("new_foo");
console.log(p1.getName());
p1.setAge(66);
console.log(p1.toString());
