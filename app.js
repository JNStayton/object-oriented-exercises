class Vehicle {
	constructor(make, model, year) {
		if (typeof make !== 'string') {
			throw new Error('Vehicle make must be a string!');
		}
		if (typeof model !== 'string') {
			throw new Error('Vehicle model must be a string!');
		}
		if (typeof year !== 'number') {
			throw new Error('Vehicle year must be a number!');
		}
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep';
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM';
	}
}

class Garage {
	constructor(num) {
		this.vehicles = [];
		this.capacity = num;
	}
	add(vehicle) {
		if (vehicle instanceof Vehicle !== true) {
			return 'Sorry, only vehicles allowed';
		}
		if (this.vehicles.length === this.capacity) {
			return "Sorry, we're full.";
		} else {
			this.vehicles.push(vehicle);
			return 'Vehicle added!';
		}
	}
}
