var str1 = "foobar";
var toLowerCase = str1.toLowerCase(),
  toLocaleLowerCase = str1.toLocaleLowerCase(),
  toUpperCase = str1.toUpperCase(),
  toLocaleUpperCase = str1.toLocaleUpperCase();

console.log(`toLowerCase = ${toLowerCase}`);
console.log(`toLocaleLowerCase = ${toLocaleLowerCase}`);
console.log(`toUpperCase = ${toUpperCase}`);
console.log(`toLocaleUpperCase = ${toLocaleUpperCase}`);

str1 = "foo bar bim";
var splitted = str1.split(" ");
console.log(splitted.join("; "));

var res = str1.replace("foo", "FOO");
console.log(res);
console.log(`str1 startsWith foo = ${str1.startsWith("foo")}`);
console.log(`str1 startsWith bim = ${str1.startsWith("bim")}`);
console.log(`str1 endsWith bim = ${str1.endsWith("bim")}`);
console.log(`str1 endsWith foo = ${str1.endsWith("foo")}`);



str1 = "foo";
var str2 = "bar" , str3 = "bim";
var concatted = str1.concat(str2, str3);
console.log(`concatted = ${concatted}`);


str1 = "Please visit Microsoft and microsoft!";
var replaced = str1.replace(/Microsoft/gi, "foobar");
console.log(replaced);