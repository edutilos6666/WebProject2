name = "foo"
age = 10
console.log "name = "+ name + " and age = "  + age


# single line comment
###
  multi
  line
  comment
###

add = (n1, n2)->
  res = n1 + n2
  return res

subtract = (n1, n2)->
  res = n1 - n2 
  return res 
  
  
multiply = (n1, n2)->
  res = n1 * n2
  return res

divide = (n1, n2)->
  res = n1 / n2
  return res



n1 = 20 ; n2 = 10
console.log("add = ", add(n1, n2))
console.log("subtract = ", subtract(n1, n2))
console.log("multiply = ", multiply(n1, n2))
console.log("divide = ", divide(n1, n2))


res = add 10, 20
console.log("res = ", res)



# function with default argument
add2 = (n1 = 10 , n2 = 20)->
  res = n1 + n2
  return res

console.log("add2 = ", add2(n1, n2))




