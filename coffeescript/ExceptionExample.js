// Generated by CoffeeScript 1.12.7
(function() {
  var divide_with_exception_handling, e, n1, n2, res;

  divide_with_exception_handling = function(n1, n2) {
    var res;
    if (n2 === 0) {
      throw "Division by Zero";
    }
    res = n1 / n2;
    return res;
  };

  try {
    n1 = 10;
    n2 = 0;
    res = divide_with_exception_handling(n1, n2);
    console.log("res = ", res);
  } catch (error) {
    e = error;
    console.log("exception = ", e);
  } finally {
    console.log("finally block will always be executed.");
  }

}).call(this);

//# sourceMappingURL=ExceptionExample.js.map
