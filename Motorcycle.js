const Vehicle = require("./Vehicle");

class Motorcycle extends Vehicle {
    numWheels = 2;

    revEngine = () => {
        return "VROOM!!!";
    };
}

module.exports = Motorcycle;