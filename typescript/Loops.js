//for loop
var n = 10;
for (var i = 0; i < n; ++i) {
    console.log("number = ", i);
}
var list = ["foo", "bar", "bim", "pako"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var el = list_1[_i];
    console.log(el);
}
//while
console.log();
n = 10;
while (n > 0) {
    console.log("number = ", n);
    n--;
}
//do ... while
console.log();
n = 10;
do {
    console.log("number = ", n);
    n--;
} while (n > 0);
