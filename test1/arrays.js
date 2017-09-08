var letters = ["a", "b","c"];
for(var i=0; i< letters.length; ++i) {
    console.log(letters[i]);
}

console.log();

for(var i in letters) {
    console.log(letters[i]);
}

console.log();

for(var l of letters) {
    console.log(l);
}

console.log();

var person = [];
person["fname"] = "foo";
person["lname"] = "bar";
person["age"] = 10 ;
console.log(`person[0] = ${person[0]}`);
console.log(`person.length = ${person.length}`);
console.log(`person[fname] = ${person["fname"]}`);
for(var prop of person) {
    console.log(prop);
}
for(var i in person) {
    console.log(i+ " => " + person[i]);
}


console.log(typeof new Number(10));
console.log(typeof new Boolean(true));
console.log(typeof new String("foo"));
console.log(Boolean(Infinity));


var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
console.log(obj);
console.log(obj.employees[0].firstName + " and " + obj.employees[0].lastName);