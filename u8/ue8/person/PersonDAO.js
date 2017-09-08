class PersonDAO {
    save(newPerson){

    }
    update(id , newPerson) {

    }

    remove(id) {

    }

    findById(id) {

    }

    findAll() {

    }
}

var Person = require("./Person");
class PersonMapper {
    mapRSToPerson(dataValues) {
        var p = new Person();
        p.id = dataValues.id ;
        p.name = dataValues.name ;
        p.age = dataValues.age;
        p.wage = dataValues.wage ;
        p.active = dataValues.active ;
        return p ;
    }

}


var Sequelize = require("sequelize");
module.exports = class PersonDAOImpl extends PersonDAO{
    constructor() {
        super();
        //sqlite
       /* this.sequelize = new Sequelize("", "", "" , {
            dialect:"sqlite",
            storage: "person.db"
        });*/

       //mysql: db , username, password
       this.sequelize = new Sequelize("test", "root", "root");

        this.DBPerson = this.sequelize.define("person", {
            name: {
                type: Sequelize.STRING ,
                allowNull: false
            },
            age: {
                type:Sequelize.INTEGER ,
                allowNull: false
            },
            wage: {
                type:Sequelize.DOUBLE ,
                allowNull: false
            },
            active: {
                type:Sequelize.BOOLEAN,
                allowNull: false
            }
        });

    }


    save(newPerson) {
        //console.log(this.sequelize);
        var $this = this ;
        this.sequelize.sync().then(function(){
        $this.DBPerson.create({
            name:newPerson.name,
            age:newPerson.age ,
            wage: newPerson.wage ,
            active: newPerson.active
        }).then(function(p) {
            console.log("persisted person successfully.");
        }).catch(function(err) {
            console.log("could not persist person.");
        });


        });
    }

    update(id , newPerson) {
        this.DBPerson.update({
            name:newPerson.name,
            age:newPerson.age ,
            wage: newPerson.wage ,
            active: newPerson.active
        }, {where: {id: id}}).then(function(p){
            console.log("updated person successfully.");
        }).catch(function(err) {
            console.log("could not update person.");
        });
    }


    remove(id) {
        this.DBPerson.destroy({where:{id:id}}).then(function(p) {
            console.log("removed person successfully.");
        }).catch(function(err) {
            console.log("could not remove person.");
        });
    }


    findById(id) {
        var p = new Person();
        this.DBPerson.findById(id).then(function(found) {
            var dataValues = found ;
            p = new PersonMapper().mapRSToPerson(dataValues);
            console.log("Person By ID", id);
            console.log(p);
        }).catch(function(err) {
            console.log(err);
        });
    }

    findAll() {
        var people = [];
            this.DBPerson.findAll().then(function(all) {
            var mapper = new PersonMapper();
            for(var dv of all) {
                people.push(mapper.mapRSToPerson(dv));
            }
            console.log("<<All People>>");
            console.log(people);
          //  return people ;
        }) .catch(function(err) {
            console.log(err);
            // return people ;
        });

    }

    findAllWithRes(res) {
        var people = [];
        this.DBPerson.findAll().then(function(all) {
            var mapper = new PersonMapper();
            for(var dv of all) {
                people.push(mapper.mapRSToPerson(dv));
            }
             res.render("people", {people:people});
            //  return people ;
        }) .catch(function(err) {
            console.log(err);
            // return people ;
        });
    }

    findByIdWithRes(id, res) {
        var p = new Person();
        this.DBPerson.findById(id).then(function(found) {
            var dataValues = found ;
            p = new PersonMapper().mapRSToPerson(dataValues);
            res.render("person", {person:p});
        }).catch(function(err) {
            console.log(err);
        });
    }


    prepareUpdateWithRes(id, res) {
        var p = new Person();
        this.DBPerson.findById(id).then(function(found) {
            var dataValues = found ;
            p = new PersonMapper().mapRSToPerson(dataValues);
            res.render("personUpdate", {person:p});
        }).catch(function(err) {
            console.log(err);
        });
    }
    updateWithRes(id , newPerson, res) {
        var $this = this ;
        this.DBPerson.update({
            name:newPerson.name,
            age:newPerson.age ,
            wage: newPerson.wage ,
            active: newPerson.active
        }, {where: {id: id}}).then(function(p){
            console.log("updated person successfully.");
            $this.findAllWithRes(res);
        }).catch(function(err) {
            console.log("could not update person.");
        });
    }


    removeWithRes(id, res) {
        var $this = this;
        this.DBPerson.destroy({where:{id:id}}).then(function(p) {
            console.log("removed person successfully.");
            $this.findAllWithRes(res);
        }).catch(function(err) {
            console.log("could not remove person.");
        });
    }




    saveWithRes(newPerson, res) {
        //console.log(this.sequelize);
        var $this = this ;
        this.sequelize.sync().then(function(){
            $this.DBPerson.create({
                name:newPerson.name,
                age:newPerson.age ,
                wage: newPerson.wage ,
                active: newPerson.active
            }).then(function(p) {
                console.log("persisted person successfully.");
                $this.findAllWithRes(res);
            }).catch(function(err) {
                console.log("could not persist person.");
            });


        });
    }



    findAllWithResAndJson(res) {
        var people = [];
        this.DBPerson.findAll().then(function(all) {
            var mapper = new PersonMapper();
            for(var dv of all) {
                people.push(mapper.mapRSToPerson(dv).convertToJson());
            }
            res.send(JSON.stringify(people));
            //  return people ;
        }) .catch(function(err) {
            console.log(err);
            // return people ;
        });
    }
}