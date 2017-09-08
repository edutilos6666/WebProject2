console.log("hello world");

var arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
var popped = arr1.pop();
console.log("popped = ", popped);
console.log(arr1);

arr1.unshift(0);
console.log(arr1);
var shifted = arr1.shift();
console.log("shifted = ", shifted);
console.log(arr1);


arr1.splice(0, 2, "foo", "bar", "bim");
console.log(arr1);
var sliced = arr1.slice(0, 2);
console.log("sliced = ", sliced);
console.log("arr1 = ", arr1);
console.log(arr1.join(" ; "));

arr1 = [1, 2,3];
arr2 = ["foo", "bar", "bim"];
var concatted = arr1.concat(arr2, arr2);
console.log(concatted);
console.log(arr1);


for(var i in concatted) {
    console.log(i);
}

for(var i of concatted) {
    console.log(i);
}

var max = {
    name:"foo"
};
console.log(max.isPrototypeOf(Object));
console.log(Object.getPrototypeOf(max));


function Person(name) {
    this.name = name ;
}

var p1 = new Person("foo");
console.log(Object.getPrototypeOf(p1));
console.log(Person.isPrototypeOf(p1));
console.log(p1.isPrototypeOf(Person));
console.log(p1.__proto__);
console.log(max.__proto__);


var william = Object.create(max);
william.name = "foobar";
william.age = 10 ;

console.log(max.name);
console.log(william.name);
console.log(max.age);
console.log(william.age);
console.log(Object.getPrototypeOf(max));
console.log(Object.getPrototypeOf(william));


console.dir([1,2,3,4]);
console.dir(william);
console.log(william);
console.log([1,2,3,4]);


function Animal(name) {
    this.name = name ;
    this.eat = function() {
        console.log(this.name + " is eating!");
    };
}



Animal.prototype.makeSound = function() {
    console.log(this.name + " is making a sound!");
};

var a = new Animal("foo");
a.eat();
a.makeSound();


function Dog(name, address) {
    Animal.call(this, name);
    this.address = address;
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog ;

var d = new Dog("foo", 10);
console.dir(Object.getPrototypeOf(d));
console.log(d.name, " ", d.address);


function Worker(name) {
    var name = name;
    this.getName = function() {
        return name ;
    };
}


var w = new Worker("foo");
console.log(w.getName());


class Shape {
   perimiter() {}
   area(){}
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b ;
        this.c = c ;
    }

    get A() {
        return this.a ;
    }

    set A(value) {
        this.a = value ;
    }

    get B() {
        return this.b ;
    }
    set B(value) {
        this.b = value ;
    }

    get C() {
        return this.c ;
    }

    set C(value) {
        this.c = value ;
    }

    perimeter() {
        return this.a + this.b + this.c ;
    }

    area() {
       var S =  this.perimeter() / 2 ;
       return Math.sqrt(S*(S-this.a)*(S-this.b)*(S-this.c));
    }

    toString() {
        return "Triangle("+this.a + ", "+ this.b + ", " + this.c +")";
    }
}


var t = new Triangle(10, 11, 12);
console.log(t.toString());
console.log("perimeter = ", t.perimeter());
console.log("area = ", t.area());
console.log(t.A , t.B , t.C);
console.log(t.a , t.b, t.c);