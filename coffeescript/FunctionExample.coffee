add = (n1, n2)->
  return n1 + n2


subtract = (n1, n2)->
  return n1 - n2


multiply = (n1, n2)->
  return n1 * n2


divide = (n1 , n2)->
  return n1 / n2




testFunctions = () ->
  n1 = 20; n2 = 10
  console.log("add = ", add(n1, n2))
  console.log("subtract = ", subtract(n1, n2))
  console.log("multiply = ", multiply(n1, n2))
  console.log("divide = ", divide(n1, n2))
  res = add n1, n2
  console.log("res = ", res)

testFunctions()




# splat
print_props = (first , second , others... , last)->
  console.log("first = ", first)
  console.log("last = ", last)
  console.log "member = ", other for other in others
  console.log("last = ", last)


print_props "foo", "bar", "bim", "pako", "edu", "tilos", "leo", "messi"

