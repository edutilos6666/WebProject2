# array
arr1 = ["foo", "bar", "bim"]

for el in arr1
  console.log("el = ", el)

console.log()

console.log el for el in arr1
console.log()



# object
worker = {
  fname: "foo",
  lname: "bar",
  age: 10
}


console.log(worker)
for k,v of worker
  console.log(k , "=> ", v)

console.log()

workers = [
  fname: "foo"
  lname: "bar"
  age: 10
,
  fname: "edu"
  lname: "tilos"
  age: 20
,
  fname: "leo"
  lname: "messi"
  age: 30
]

for worker in workers
  for k,v of worker
     console.log(k , "=> ", v)
  console.log()


console.log()


workers = [
  {
    fname: "new_foo", lname: "new_bar", age: 10
  },
  {
    fname: "new_edu", lname:"new_tilos", age:20
  },
  {
    fname: "new_leo", lname:"new_messi", age:30
  }
]

for worker in workers
  console.log k, "=> ", v for k,v of worker
  console.log()

console.log()



# ranges
r1 = [0..10]
console.log("r1 = ", r1)
r2 = [0...10]
console.log("r2 = ", r2)

arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr[0..3])
console.log(arr[0...3])
console.log(arr[-3..])
console.log(arr[-3...])


for n in r1
  console.log(n)
console.log()

console.log n for n in r1


arr2 = (n for n in r1 by 3)
console.log(arr2)





