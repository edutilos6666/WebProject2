function add1 (x , y) {
    return x + y;
}

var add2 = function(x, y) {
    return x  + y ;
};

var add3 = (x,y) => x + y;
var add4 = new Function("x", "y", "return x + y; ");


var x = 10 , y = 3 ;
console.log(`add1 = ${add1(x,y)}`);
console.log(`add2 = ${add2(x,y)}`);
console.log(`add3 = ${add3(x,y)}`);
console.log(`add4 = ${add4(x,y)}`);