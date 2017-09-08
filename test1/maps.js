var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var myIter = myMap[Symbol.iterator]();
console.log(myIter.next().value);
console.log(myIter.next().value);
console.log(myIter.next().value);
console.log(myIter.next().value);


var p ;
for(p of myMap) {
    console.log(p);
}


console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get("0"));
console.log(myMap.entries());

myMap.forEach(function(k,v) {
    console.log(`${k} => ${v}`);
});

console.log();
var keys = myMap.keys();
for(var k of keys) {
    console.log(`${k} => ${myMap.get(k)}`);
}

console.log();
var entries = myMap.entries();
var entry ;
for(entry of entries) {
    console.log(`${entry[0]} => ${entry[1]}`);
}