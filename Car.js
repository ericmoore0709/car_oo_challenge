class Car {

    /**
     * Creates an instance of the Car class with a given make, model, and year.
     * @param {string} make the make of the car
     * @param {string} model the model of the car
     * @param {string} year the year of the car 
     */
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    /**
     * Returns a `string` representation of the car.
     * @returns a `string` representation of the car.
     */
    toString = () => {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    };

    /**
     * Returns the sound of the car horn when honked. 
     * @returns the sound of the car horn when honked.
     */
    honk = () => {
        return "Beep.";
    }

}

module.exports = Car;