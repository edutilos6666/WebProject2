module.exports = class NodePerson {
    constructor(id , name, age, wage, active) {
        this.id = id ;
        this.name = name;
        this.age = age ;
        this.wage = wage;
        this.active = active ;
    }


    toString() {
        return `${this.id},${this.name},${this.age},${this.wage},${this.active}`;
    }
}