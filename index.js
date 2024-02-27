const Car = require('./Car');
const car1 = new Car("Toyota", "Camry", "2004");
console.log(car1.honk());
console.log(car1.toString());
console.log(car1.numWheels);

const Motorcycle = require('./Motorcycle');
const motorcycle1 = new Motorcycle("Honda", "XL125", "1984");
console.log(motorcycle1.toString());
console.log(motorcycle1.honk());
console.log(motorcycle1.revEngine());
console.log(motorcycle1.numWheels);

const Garage = require('./Garage');
const garage1 = new Garage(1);

console.log(garage1.add("LOLSORANDOMXDSTR"));
console.log(garage1.add(car1));
console.log(garage1.add(motorcycle1));