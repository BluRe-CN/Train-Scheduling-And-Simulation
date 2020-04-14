/**
 * A simple class that holds when the transaction period of a passenger is to be over.
  */

class ServiceEndEvent {
	/**
	 * 
	 * @param {*} passenger The passenger whose end transaction it to be held.
	 * @param {*} attendant The current attendant responsible for serving the passenger.
	 * @param {*} train The instance of the train the passenger is scheduled for.
	 * @param {*} time The time the passenger transaction is over.
	 */
	constructor(passenger, attendant, train, time) {
		this.passenger = passenger;
		this.attendant = attendant;
		this.train = train;
		this.time = time;
	}

	/**
	 * @returns The id of the passenger.
	 */
	getId() {
		return this.passenger.getId();
	}

	/**
	 * @returns The time the transaction would be over.
	 */
	getTime() {
		return this.time;
	}

	/**
	 * @returns The instance of the train the passenger is scheduled for.
	 */
	getTrain() {
		return this.train;
	}

	/**
	 * @returns The attendant responsible for serving the passenger.
	 */
	getAttendant() {
		return this.attendant;
	}

	/**
	 * @returns The passenger scheduled for this event.
	 */
	getPassenger() {
		return this.passenger;
	}

	/**
	 * Initializes the service end event.
	 */
	happen() {
		var attendant = this.attendant;
		var passenger = this.passenger;
		attendant.queueEndServiceMessage(passenger);
		attendant.enterQueue();
	}
}
