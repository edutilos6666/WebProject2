class ArithmeticOps
  constructor: (n1, n2)->
    @n1 = n1
    @n2 = n2

  add: ()->
    @n1 + @n2

  subtract: ()->
    @n1 - @n2

  multiply: ()->
    @n1 * @n2

  divide: ()->
    @n1 / @n2

  modulo: ()->
    @n1 % @n2



test_arithmetic_ops = ()->
  n1 = 20 ; n2 = 10
  ops = new ArithmeticOps(n1, n2)
  console.log("add = " , ops.add())
  console.log("subtract = ", ops.subtract())
  console.log("multiply = ", ops.multiply())
  console.log("divide = ", ops.divide())
  console.log("modulo = ", ops.modulo())

test_arithmetic_ops()



class RelationalOps
  constructor: (n1, n2)->
    @n1 = n1
    @n2 = n2

  gt: ()->
    @n1 > @n2

  ge: ()->
    @n1 >= @n2

  lt: ()->
    @n1 < @n2

  le: ()->
    @n1 <= @n2

  eq: ()->
    @n1 == @n2

  ne: ()->
    @n1 != @n2

test_relational_ops = ()->
  n1 = 20 ; n2 = 10
  ops = new RelationalOps(n1, n2)
  console.log("gt = ", ops.gt())
  console.log("ge = ", ops.ge())
  console.log("lt = ", ops.lt())
  console.log("le = ", ops.le())
  console.log("eq = ", ops.eq())
  console.log("ne = ", ops.ne())

test_relational_ops()



test_other_ops = ()->
  name = "foo"
  age = 10
  console.log("name? = ", name?)
  console.log("age? = ", age?)

  if (name == "foo" && age == 10)
    console.log("admin credentials are correct.")
  else if (name == "bar" && age == 10)
    console.log("user credentials are correct.")
  else
    console.log("credentials are false.")

test_other_ops()
