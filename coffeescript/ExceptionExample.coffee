divide_with_exception_handling = (n1,n2) ->
   if n2 == 0
     throw "Division by Zero"
   res = n1 / n2
   res

try
  n1 = 10
  n2 = 0
  res = divide_with_exception_handling n1 , n2
  console.log("res = ", res)
catch e
  console.log("exception = ", e)
finally
  console.log("finally block will always be executed.")