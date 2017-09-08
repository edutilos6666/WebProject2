# for loop in list
names = ["foo", "bar", "bim"]

for name in names
  console.log(name)

console.log()

for name , i in names
  console.log(name, " , ", i)

console.log()



# for loop in key-value (dictionary)
props = {"foo":10, "bar":20, "bim":30}
console.log(props["foo"], " and ", props["bar"])
for k,v of props
  console.log(k, " => ", v)

console.log()




# list comprehension
people = [
   name: "foo"
   age: 10
   wage: 100.0
,
   name: "edu"
   age: 20
   wage: 200.0
,
   name: "pako"
   age: 30
   wage: 300.0
]


names = (person.name for person in people)
for name in names
  console.log(name)

console.log()


people2 = [
  {
   name: "new_foo", age: 10, wage: 100.0
  },
  {
   name: "new_edu", age: 20, wage: 200.0
  },
  {
   name: "new_pako", age: 30, wage:300.0
  }
]

names = (person.name for person in people2)
for name in names
  console.log(name)

console.log()





