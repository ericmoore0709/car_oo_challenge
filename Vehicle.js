class Vehicle {

    /**
     * Creates an instance of the vehicle class with a given make, model, and year.
     * @param {string} make the make of the vehicle
     * @param {string} model the model of the vehicle
     * @param {string} year the year of the vehicle 
     */
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    /**
     * Returns a `string` representation of the vehicle.
     * @returns a `string` representation of the vehicle.
     */
    toString = () => {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    };

    /**
     * Returns the sound of the vehicle horn when honked. 
     * @returns the sound of the vehicle horn when honked.
     */
    honk = () => {
        return "Beep.";
    }

}

module.exports = Vehicle;