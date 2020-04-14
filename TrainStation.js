/**
* A simple train simulation project that involves
* the reception and scheduling process of passengers.
* It starts by passengers arriving at the train station, after
* which they will be received by a number of attendants.
* If there is not enough train attendants to handle the passenger,
* they are queued till an attendant is done serving a passenger, who then is free to serve again.
*
*
**/

class TrainStation {
	/**
	 * 
	 * @param listener The simulation completion listener to be invoked when the simulation responses is complete.
	 */
	constructor(listener) {
		this.train = new Train(listener);
	}

	/**
	 * Sets the number of attendants in the train station.
	 * @param number The numerical value of the attendants stationed at the train station.
	 */
	setNumberOfAttendants(number) {
		this.train.setNumberOfAttendants(number);
	}

	/**
	 * Sets the number of trains available in the train station.
	 * @param {*} numberOfTrains The numerical value of the trains available.
	 */
	setNumberOfTrains(numberOfTrains) {
		this.train.setNumberOfTrains(numberOfTrains);
	}

	/**
	 * Sets the number of passenger each train can carry.
	 * @param {*} number The numerical value of the passengers the train can carry.
	 */
	setNumberOfPassengers(number) {
		this.train.setNumberOfPassengers(number);
	}

	/**
	 * Sets the average time taken for a passenger to arrive at the train station for scheduling.
	 * @param {*} avgTime The numerical value of the average time taken for a passenger to arrive the station.
	 */
	setAveragePassengerArrivalTime(avgTime) {
		this.train.setAvgPassengerArrivalTime(avgTime);
	}

	/**
	 * Sets the average time taken for a passenger to complete the scheduling process.
	 * @param {*} avgTime The numerical value for the scheduling duration.
	 */
	setAveragePassengerSchedulingDuration(avgTime) {
		this.train.setAvgPassengerTransactionDuration(avgTime);
	}

	/**
	 * Resets the train.
	 */
	resetTrain() {
		this.train.resetSimulator();
		this.train.resetResponseHolder();
	}

	/**
	 * Initiates the overall simulation process.
	 */
	startSimulation() {
		this.train.simulate();
	}
}

