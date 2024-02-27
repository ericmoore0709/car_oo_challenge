const Vehicle = require("./Vehicle");

class Garage {

    /**
     * Creates an instance of the Garage class.
     * @param {int} capacity the vehicle capacity of the garage. 
     */
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    /**
     * Adds a vehicle to the garage, if it is a vehicle and there is room.
     * @param {*} vehicle the vehicle to add.
     * @returns the result message.
     */
    add(vehicle) {

        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        } else if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        } else {
            this.vehicles.push(vehicle);
            return "Vehicle added.";
        }
    }
}

module.exports = Garage;