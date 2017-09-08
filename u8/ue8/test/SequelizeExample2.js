var Sequelize = require("sequelize");

var sequelize = new Sequelize("", "", "" , {
    dialect: "sqlite",
    storage: "example1.db"
});


function printProgrammer(programmer) {
    var id = programmer.id,
        name = programmer.name,
        age = programmer.age ,
        wage = programmer.wage ,
        active = programmer.active ;

    console.log("[", id, ", ", name, ", ", age, ", ", wage, ", ", active, "]");
}
var Programmer = sequelize.define("programmer", {
    name: {
        type: Sequelize.STRING ,
        allowNull: false ,
        validate: {
            len: [2, 150]
        }
    },
    age: {
        type: Sequelize.INTEGER ,
        allowNull: false
    },
    wage: {
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    active: {
        type:Sequelize.BOOLEAN ,
        allowNull: false
    }
});



sequelize.sync({force:true, logging:console.log}).then(function(){
    //create some Programmer
    Programmer.create({
        name:"foo",
        age: 10,
        wage: 100.0,
        active: false
    });

    //bulkCreate
    Programmer.bulkCreate([
        {
            name:"bar",
            age:20,
            wage:200.0,
            active:true
        },
        {
            name:"bim",
            age:30,
            wage:300.0,
            active:false
        }
    ]);

    //findAll
    Programmer.findAll().then(function(programmers) {
        for(programmer of programmers) {
            printProgrammer(programmer.dataValues);
        }
    });


    //update
    Programmer.update({
        name:"new_foo",
        age: 66 ,
        wage:666.6,
        active:true
    }, {where: {id:1}}).then(function() {
        Programmer.findById(1).then(function (programmer) {
            console.log("<<after update>>");
            printProgrammer(programmer.dataValues);
        }).then(function() {











        //delete
        Programmer.destroy({where:{id:1}}).then(function(){
            console.log("successfully deleted.");
            Programmer.findAll().then(function(programmers) {
                console.log("<<After delete>>");
                for(var programmer of programmers) {
                    printProgrammer(programmer.dataValues);
                }
            });

        }).catch(function(err){
            console.log("could not delete.");
        });
        });


    });





}).catch(function(err) {
    console.log(err);
});