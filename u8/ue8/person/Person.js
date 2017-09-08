module.exports = class Person {
    constructor(id, name , age , wage, active) {
        this.id = id ;
        this.name = name ;
        this.age = age ;
        this.wage = wage ;
        this.active = active
    }

    toString() {
        return "["+ this.id +", "+ this.name + ", " + this.age + ", " + this.wage
         + ", " + this.active + "]";

    }


    convertToJson() {
        var obj = {};
        obj["id"] = this.id ;
        obj["name"] = this.name;
        obj["age"] = this.age;
        obj["wage"] = this.wage;
        obj["active"] = this.active;
        return obj;
    }

}


//exports = {"Person": "Person"};


