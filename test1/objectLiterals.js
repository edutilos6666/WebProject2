var car = {
   name: "Fiat",
    model: "500",
    weight: 850 ,
    color: "white",
    start: function() {
       console.log(`${this.name} is being started.`);
       },
    drive: function() {
       console.log(`${this.name} is being driven.`);
    },
    brake: function() {
       console.log(`${this.name} is being braken.`);
    },
    stop: function() {
       console.log(`${this.name} is being stopped.`);
    }
};


console.log("car name = " + car.name);
console.log(`car model = ${car.model}`);
console.log(`car weight = ${car.weight}`);
console.log(`car color = ${car.color}`);
car.start();
car.drive();
car.brake();
car.stop();