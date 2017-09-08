// Generated by CoffeeScript 1.12.7
(function() {
  var Circle, Person, Rectangle, Shape, Triangle, test_inheritance, test_person,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Person = (function() {
    function Person(id, name, age, wage, active) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.wage = wage;
      this.active = active;
    }

    Person.prototype.set_id = function(id) {
      return this.id = id;
    };

    Person.prototype.set_name = function(name) {
      return this.name = name;
    };

    Person.prototype.set_age = function(age) {
      return this.age = age;
    };

    Person.prototype.set_wage = function(wage) {
      return this.wage = wage;
    };

    Person.prototype.set_active = function(active) {
      return this.active = active;
    };

    Person.prototype.get_id = function() {
      return this.id;
    };

    Person.prototype.get_name = function() {
      return this.name;
    };

    Person.prototype.get_age = function() {
      return this.age;
    };

    Person.prototype.get_wage = function() {
      return this.wage;
    };

    Person.prototype.is_active = function() {
      return this.active;
    };

    Person.prototype.to_string = function() {
      return this.id + " , " + this.name + ", " + this.age + ", " + this.wage + ", " + this.active;
    };

    Person.new_instance = function() {
      return new Person(0, "default", 0, 0.0, false);
    };

    return Person;

  })();

  test_person = function() {
    var p1;
    p1 = new Person(1, "foo", 10, 100.0, true);
    console.log(p1.to_string());
    p1.set_name("new_foo");
    console.log(p1.get_name());
    p1.set_age(66);
    console.log(p1.to_string());
    return console.log(Person.new_instance().to_string());
  };

  test_person();

  Shape = (function() {
    function Shape() {}

    Shape.prototype.perimeter = function() {
      return 0.0;
    };

    Shape.prototype.volume = function() {
      return 0.0;
    };

    return Shape;

  })();

  Triangle = (function(superClass) {
    extend(Triangle, superClass);

    function Triangle(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    Triangle.prototype.perimeter = function() {
      return this.a + this.b + this.c;
    };

    Triangle.prototype.volume = function() {
      var S, res;
      S = this.perimeter() / 2;
      res = Math.sqrt(S * (S - this.a) * (S - this.b) * (S - this.c));
      return res;
    };

    return Triangle;

  })(Shape);

  Rectangle = (function(superClass) {
    extend(Rectangle, superClass);

    function Rectangle(a, b) {
      this.a = a;
      this.b = b;
    }

    Rectangle.prototype.perimeter = function() {
      return 2 * (this.a + this.b);
    };

    Rectangle.prototype.volume = function() {
      return this.a * this.b;
    };

    return Rectangle;

  })(Shape);

  Circle = (function(superClass) {
    extend(Circle, superClass);

    function Circle(r) {
      this.r = r;
    }

    Circle.prototype.perimeter = function() {
      return 2 * Math.PI * this.r;
    };

    Circle.prototype.volume = function() {
      return Math.PI * Math.pow(this.r, 2);
    };

    return Circle;

  })(Shape);

  test_inheritance = function() {
    var c1, r1, t1;
    t1 = new Triangle(10, 11, 12);
    console.log("<<Triangle instance>>");
    console.log("perimeter = ", t1.perimeter());
    console.log("volume = ", t1.volume());
    console.log();
    console.log("<<Rectangle instance>>");
    r1 = new Rectangle(10, 20);
    console.log("perimeter = ", r1.perimeter());
    console.log("volume = ", r1.volume());
    console.log();
    console.log("<<Circle instance>>");
    c1 = new Circle(10);
    console.log("perimeter = ", c1.perimeter());
    return console.log("volume = ", c1.volume());
  };

  test_inheritance();

}).call(this);

//# sourceMappingURL=ClassExample.js.map