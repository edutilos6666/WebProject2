# interpolation
name = "foo"
age = 10
wage = 100.0

res = "#{name}, #{age}, #{wage}"
console.log("res = ", res)


str = "FOOBAR"
l1 = str.toLocaleLowerCase()
l2 = str.toLowerCase()
u1 = l2.toLocaleUpperCase()
u2 = l2.toUpperCase()
console.log("l1 = ", l1)
console.log("l2 = ", l2)
console.log("u1 = ", u1)
console.log("u2 = ", u2)
console.log()

str ="foo,bar,bim,pako"
splitted = str.split(",")
console.log("<<splitted>>")
for s in splitted
  console.log(s)


str= "foobar"
p1 = str.substr(0, 3)
p2 = str.substr(3)
console.log(p1, " and ", p2)

concatted = ", ".concat(splitted)
console.log("concatted = ", concatted)


sliced = str.slice 0, 3
console.log("sliced = ", sliced)

str = "apple Apple orange"
regex = /apple/gi
res = str.match regex
console.log("match res = ", res)
res = str.search regex
console.log("search res = ", res)
