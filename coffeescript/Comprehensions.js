// Generated by CoffeeScript 1.12.7
(function() {
  var i, j, k, l, len, len1, len2, len3, m, n, name, names, people, people2, person, props, v;

  names = ["foo", "bar", "bim"];

  for (j = 0, len = names.length; j < len; j++) {
    name = names[j];
    console.log(name);
  }

  console.log();

  for (i = l = 0, len1 = names.length; l < len1; i = ++l) {
    name = names[i];
    console.log(name, " , ", i);
  }

  console.log();

  props = {
    "foo": 10,
    "bar": 20,
    "bim": 30
  };

  console.log(props["foo"], " and ", props["bar"]);

  for (k in props) {
    v = props[k];
    console.log(k, " => ", v);
  }

  console.log();

  people = [
    {
      name: "foo",
      age: 10,
      wage: 100.0
    }, {
      name: "edu",
      age: 20,
      wage: 200.0
    }, {
      name: "pako",
      age: 30,
      wage: 300.0
    }
  ];

  names = (function() {
    var len2, m, results;
    results = [];
    for (m = 0, len2 = people.length; m < len2; m++) {
      person = people[m];
      results.push(person.name);
    }
    return results;
  })();

  for (m = 0, len2 = names.length; m < len2; m++) {
    name = names[m];
    console.log(name);
  }

  console.log();

  people2 = [
    {
      name: "new_foo",
      age: 10,
      wage: 100.0
    }, {
      name: "new_edu",
      age: 20,
      wage: 200.0
    }, {
      name: "new_pako",
      age: 30,
      wage: 300.0
    }
  ];

  names = (function() {
    var len3, n, results;
    results = [];
    for (n = 0, len3 = people2.length; n < len3; n++) {
      person = people2[n];
      results.push(person.name);
    }
    return results;
  })();

  for (n = 0, len3 = names.length; n < len3; n++) {
    name = names[n];
    console.log(name);
  }

  console.log();

}).call(this);

//# sourceMappingURL=Comprehensions.js.map