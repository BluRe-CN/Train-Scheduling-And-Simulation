/**
 * A simple virtual passenger that is to be scheduled for transit.
 
 */

class Passenger {
	/**
	 * 
	 * @param {*} train The instance of the train this passenger is being scheduled for.
	 * @param {*} transactionTime The average transaction time generated for this passenger.
	 */
	constructor(train, transactionTime) {
		this.train = train;
		this.transactionTime = train.getRandom(transactionTime);
		this.id = train.generatePassengerId();
	}

	/**
	 * @returns The id of this passenger
	 */
	getId() {
		return this.id;
	}

	/**
	 * @returns The transaction time of this passenger.
	 */
	getTime() {
		return this.transactionTime;
	}

	/**
	 * Adds this passenger to the passenger queue of the train.
	 */
	enterQueue() {
		this.train.addPassengerToQueue(this);
	}
}
