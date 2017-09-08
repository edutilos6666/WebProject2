class Person
  constructor: (id, name, age, wage,active)->
    @id = id
    @name = name
    @age = age
    @wage = wage
    @active = active

  set_id: (id)->
    @id = id

  set_name: (name)->
    @name = name

  set_age: (age)->
    @age = age

  set_wage: (wage)->
    @wage = wage

  set_active: (active)->
    @active = active


  get_id: ()->
    @id

  get_name: ()->
    @name

  get_age: () ->
    @age

  get_wage: () ->
    @wage

  is_active: ->
    @active

  to_string: ->
    @id + " , "+ @name + ", "+ @age + ", "+ @wage + ", "+ @active

  # static method
  @new_instance: ()->
    new Person(0, "default", 0, 0.0, false)


test_person = () ->
  p1 = new Person(1, "foo", 10, 100.0, true)
  console.log(p1.to_string())
  p1.set_name ("new_foo")
  console.log(p1.get_name())
  p1.set_age (66)
  console.log(p1.to_string())
  console.log(Person.new_instance().to_string())


test_person()




class Shape
  constructor: ()->

  perimeter: ()->
    0.0

  volume: ()->
    0.0

class Triangle extends Shape
  constructor: (a, b,c)->
    @a = a
    @b = b
    @c = c

  perimeter: ()->
    @a + @b + @c

  volume: ()->
    S = @perimeter() / 2
    res = Math.sqrt(S*(S-@a)*(S-@b)*(S-@c))
    res


class Rectangle extends Shape
  constructor: (a, b)->
    @a = a
    @b = b

  perimeter: ()->
    2*(@a + @b)

  volume: ()->
    @a*@b

class Circle extends Shape
  constructor: (r)->
    @r = r

  perimeter: ()->
    2*Math.PI*@r

  volume: ()->
    Math.PI*Math.pow(@r, 2)


test_inheritance = ()->
  t1 = new Triangle(10, 11, 12)
  console.log("<<Triangle instance>>")
  console.log("perimeter = ", t1.perimeter())
  console.log("volume = ", t1.volume())
  console.log()
  console.log("<<Rectangle instance>>")
  r1 = new Rectangle(10, 20)
  console.log("perimeter = ", r1.perimeter())
  console.log("volume = ", r1.volume())
  console.log()
  console.log("<<Circle instance>>")
  c1 = new Circle(10)
  console.log("perimeter = ", c1.perimeter())
  console.log("volume = ", c1.volume())

test_inheritance()

