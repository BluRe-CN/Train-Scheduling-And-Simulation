class Attendant {
	/**
	 * 
	 * @param {*} train The instance of the train this attendant is scheduling passengers for.
	 */
	constructor(train) {
		this.train = train;
		this.id = train.generateAttendantId();
	}

    /**
	 * @returns The id of this attendant.
	 */
	getId() {
		return this.id;
	}

	/**
	 * Enqueues this attendant to the attendant queue.
	 */
	enterQueue() {
		this.train.addAttendantToQueue(this);
	}

	/**
	 * Generates a start service response for the passenger.
	 * @param {*} passenger The passenger the response is generated for.
	 */
	queueBeginServiceMessage(passenger) {
		var train = this.train;
		var response = new Response(train.printTime(), " Attendant " + this.id + " Start serving passenger " + passenger.getId(), false);
		train.queueResponse(response);
	}

	/**
	 * Generates an end service response for the passenger.
	 * @param {*} passenger The passenger the response is generated for.
	 */
	queueEndServiceMessage(passenger) {
		var train = this.train;
		var response = new Response(train.printTime(), " Attendant " + this.id + " Finished serving passenger " + passenger.getId(), false);
		train.queueResponse(response);
	}

}

