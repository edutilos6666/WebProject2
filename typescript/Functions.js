//args
function sum1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var n = args_1[_a];
        sum += n;
    }
    return sum;
}
console.log("sum1 = ", sum1(1, 2, 3, 4, 5));
function sum2() {
    var sum = 0;
    for (var i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}
//that works
console.log("sum2 = ", sum2(1, 2, 3, 4, 5));
//default properties
function printProps(id, name, age, wage, active) {
    if (id === void 0) { id = 0; }
    if (name === void 0) { name = "default"; }
    if (age === void 0) { age = 0; }
    if (wage === void 0) { wage = 0.0; }
    if (active === void 0) { active = false; }
    console.log("id = ", id);
    console.log("name = ", name);
    console.log("age = ", age);
    console.log("wage = ", wage);
    console.log("active = ", active);
    console.log();
}
printProps();
printProps(1);
printProps(1, "foo", 10, 100.0);
//anonymous functions
var add = function (n1, n2) {
    return n1 + n2;
};
var multiply = function (n1, n2) {
    return n1 * n2;
};
console.log("add = ", add(10, 20));
console.log("multiply = ", multiply(10, 20));
//Function
var add2 = new Function("n1", "n2", "return n1 + n2");
console.log("add2 = ", add2(10, 20));
var multiply2 = new Function("n1", "n2", "return n1 * n2");
console.log("multiply2 = ", multiply2(10, 20));
// recursion
function factorial(n) {
    if (n <= 0)
        return 1;
    return n * factorial(n - 1);
}
console.log("factorial(5) = ", factorial(5));
console.log("factorial(8) = ", factorial(8));
// lambda
var add3 = function (n1, n2) { return n1 + n2; };
var multiply3 = function (n1, n2) {
    return n1 * n2;
};
console.log("add3 = ", add3(10, 20));
console.log("multiply3 = ", multiply3(10, 20));
//function overloading , in js that is not possible!
//but in ts it is not possible as well!
function disp(str) {
    console.log("string str = ", str);
}
