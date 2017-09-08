/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
var org;
(function (org) {
    var jsweet;
    (function (jsweet) {
        /**
         * This is a very simple example that just shows an alert.
         */
        var HelloWorld = (function () {
            function HelloWorld() {
            }
            HelloWorld.main = function (args) {
                var p1 = new Person(1, "foo", 10, 100.0);
                console.log(p1.toString());
            };
            return HelloWorld;
        }());
        jsweet.HelloWorld = HelloWorld;
        HelloWorld["__class"] = "org.jsweet.HelloWorld";
        var Person = (function () {
            function Person(id, name, age, wage) {
                this.id = 0;
                this.age = 0;
                this.wage = 0;
                this.id = id;
                this.name = name;
                this.age = age;
                this.wage = wage;
            }
            Person.prototype.setId = function (id) {
                this.id = id;
            };
            Person.prototype.setName = function (name) {
                this.name = name;
            };
            Person.prototype.setAge = function (age) {
                this.age = age;
            };
            Person.prototype.setWage = function (wage) {
                this.wage = wage;
            };
            Person.prototype.getId = function () {
                return this.id;
            };
            Person.prototype.getAge = function () {
                return this.age;
            };
            Person.prototype.getWage = function () {
                return this.wage;
            };
            Person.prototype.toString = function () {
                return this.id + ", " + this.name + ", " + this.age + ", " + this.wage;
            };
            return Person;
        }());
        jsweet.Person = Person;
        Person["__class"] = "org.jsweet.Person";
    })(jsweet = org.jsweet || (org.jsweet = {}));
})(org || (org = {}));
org.jsweet.HelloWorld.main(null);


/*
 // java code
 package org.jsweet;

 import static jsweet.dom.Globals.*;


public class HelloWorld {
    public static void main(String[] args) {
    //alert("Hi there!");
    Person p1 = new Person(1l , "foo", 10, 100.0D);
    console.log(p1.toString());
}
}


public class Person {
    private long id;
    private String name;
    private int age;
    private double wage;

    public Person(long id, String name, int age , double wage) {
    this.id = id ;
    this.name = name;
    this.age = age ;
    this.wage = wage ;
}

public void setId(long id) {
    this.id = id ;
}

public void setName(String name) {
    this.name = name;
}

public void setAge(int age) {
    this.age = age;
}

public void setWage(double wage) {
    this.wage = wage;
}

public long getId() {
    return this.id ;
}

public int getAge() {
    return this.age ;
}

public double getWage() {
    return this.wage ;
}

@Override
public String toString() {
    return this.id + ", " + name  + ", " + age + ", " + wage ;
}

}

 */