"use strict"
let Sequelize = require("sequelize");
let sequelize = new Sequelize("mainDB", null, null,  {
    dialect:"sqlite",
    storage: "example1.db"
});

const Worker = sequelize.define("worker2" , {
    name: Sequelize.STRING ,
    age: Sequelize.INTEGER ,
    wage: Sequelize.DOUBLE
});



var w1 = Worker.build();
w1.name = "foo";
w1.age = 10;
w1.wage = 100.0 ;

/*w1.save().error(function(err) {
  console.log("error");
}).success(function() {
    console.log("success");
});*/

sequelize.sync({force:true}).then(
    function(info) {
      console.log("worked!");
      Worker.create({
          name: "foo",
          age: 10,
          wage: 100.0
      });

      Worker.create({
          name:"bar",
          age:20 ,
          wage:200.0
      });

       Worker.findAll().then(function(workers) {
           for(var worker of workers) {
               console.log(worker.dataValues);
               // console.log(worker.dataValues.name);
           }
       });

    }, function(err) {
        console.log("failed!");
    }
);


