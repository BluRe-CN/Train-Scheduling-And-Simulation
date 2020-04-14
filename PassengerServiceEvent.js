class PassengerServiceEvent {
	constructor(passenger, attendant, train, time, numberOfPersons) {
		this.passenger = passenger;
		this.attendant = attendant;
		this.train = train;
		this.time = time;
		this.numberOfPersons = numberOfPersons;
	}

	getId() {
		return this.passenger.getId();
	}

	getTime() {
		return this.time;
	}

	getTrain() {
		return this.train;
	}

	getAttendant() {
		return this.attendant;
	}

	getPassenger() {
		return this.passenger;
	}

	happen() {
		var attendant = this.attendant;
		var train = this.train;
		var passenger = this.passenger;
		attendant.queueBeginServiceMessage(passenger);
		var pTime = parseFloat(passenger.getTime());
		var tTime = parseFloat(train.getCurrentTime());
		var nTime = (pTime + tTime).toFixed(2);
		train.addEvent(new ServiceEndEvent(passenger, attendant, train, nTime));
	}
}
