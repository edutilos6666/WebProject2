# if ... else if ... else ...
age = 10
if age > 0 && age < 10
  console.log("you are child.")
else if age >= 10 && age <20
  console.log("you are teen.")
else if age >= 20 && age < 35
  console.log("you are young.")
else
  console.log("you are old.")


# unless ..
unless age != 10
  console.log("you are 10.")
else
  console.log("you are not 10.")


# switch
weekday = "Tuesday"
res = switch
  when weekday == "Monday" then "It's Monday."
  when weekday == "Tuesday" then "It's Tuesday."
  when weekday == "Wednesday" then "It's Wednesday."
  when weekday == "Thursday" then "It's Thursday."
  when weekday == "Friday" then "It's Friday."
  when weekday == "Saturday" then "It's Saturday."
  else "It's Sunday or unknown weekday."


console.log("res = ", res)


name = "foo"
res = switch name
  when "foo","bar" then "you are foo or bar."
  when "edu", "tilos" then "you are edu or tilos."
  when "leo", "messi" then "you are leo or messi."

console.log("res = ", res)


res = true if name == "foo"
console.log("res = ", res)
res = true unless name != "foo"
console.log("res = ", res)
