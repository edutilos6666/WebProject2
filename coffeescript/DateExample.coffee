date = new Date()
###
  toDateString()
  toLocaleDateString()
  toLocaleString()
  toLocaleTimeString()
  toTimeString()
  toUTCString()
###

console.log("toDateString = ", date.toDateString())
console.log("toLocaleDateString = ", date.toLocaleDateString())
console.log("toLocaleString = ", date.toLocaleString())
console.log("toLocaleTimeString = ", date.toLocaleTimeString())
console.log("toUTCString = ", date.toUTCString())


print_date = (date)->
  year = date.getFullYear()
  month = date.getMonth()
  day = date.getDay()
  hours = date.getHours()
  mins = date.getMinutes()
  seconds = date.getSeconds()
  ms = date.getMilliseconds()
  d = date.getDate()
  t = date.getTime()
  console.log("year = ", year)
  console.log("month = ", month)
  console.log("day = ", day)
  console.log("hours = ", hours)
  console.log("mins = ", mins)
  console.log("seconds = ", seconds)
  console.log("ms = ", ms)
  console.log("d = ", d)
  console.log("t = " , t)
  console.log()


print_date(date)



print_date_utc = (date)->
  year = date.getUTCFullYear()
  month = date.getUTCMonth()
  day = date.getUTCDay()
  hours = date.getUTCHours()
  mins = date.getUTCMinutes()
  seconds = date.getUTCSeconds()
  ms = date.getUTCMilliseconds()
  d = date.getUTCDate()
  t = date.getTime()
  console.log("<<UTC>>")
  console.log("year = ", year)
  console.log("month = ", month)
  console.log("day = ", day)
  console.log("hours = ", hours)
  console.log("mins = ", mins)
  console.log("seconds = ", seconds)
  console.log("ms = ", ms)
  console.log("d = ", d)
  console.log("t = " , t)
  console.log()


print_date_utc date
