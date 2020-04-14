/**
* A simple virtual Train that attendants schedules passengers for transit.
*
**/

class Train {

	/**
	 * 
	 * @param listener The simulation completion listener to be invoked when the simulation responses is complete
	 */
	constructor(listener) {
		this.listener = listener;
		this.responses = [];
	}
	/**
	* Sets the average passenger arrival time
	* @param [tTime] the average time
	*
	**/
	setAvgPassengerTransactionDuration(tTime) {
		this.avgPassengerTransactionTime = tTime;
	}


	/**
	* Sets the number of attendants available for the train
	* @param [number] the number of passengers
	*
	**/
	setNumberOfAttendants(number) {
		this.attendantsCount = number;
	}

	/**
	 * Adds a response to the response queue.
	 * @param response The response to be queued.
	 */
	queueResponse(response) {
		this.responses.push(response);
	}

	/**
	 * @returns The average passenger transaction time.
	 */
	getAvgPassengerTransactionTime() {
		return this.avgPassengerTransactionTime;
	}

	/**
	 * @returns The average passenger arrival time.
	 */
	getAvgPassengerArrivalTime() {
		return this.avgPassengerArrivalTime;
	}
	/**
	* Sets the average passenger arrival time,
	* @param [aTime] the average passenger arrival time.
	*
	**/
	setAvgPassengerArrivalTime(aTime) {
		this.avgPassengerArrivalTime = aTime;
	}

	/**
	* Initializes the attendant queue with the specified number of attendants
	*
	**/
	populateAttendants() {
		for (var i = 0; i < this.attendantsCount; ++i) {
			this.attendantQueue.add(new Attendant(this));
		}
	}

	/**
	* Generates a random floating number using the suppied average number
	* @param avg the average number on which the random number is generated
	*
	**/
	getRandom(avg) {
		return Math.random() * parseFloat(avg);
	}

	/**
	* Generates a unique passenger identification number
	* @return An integer representing the id of a new passenger
	*
	**/
	generatePassengerId() {
		return ++this.passengerId;
	}

	/**
	* Generates a unique attendant identification number
	* @return an integer representing the id of new attendant
	*
	**/
	generateAttendantId() {
		return ++this.attendantId;
	}

	/**
	 * Adds a passenger to the passenger list
	 * @param  passenger The passenger to be added to the list.
	 */
	addPassengerToQueue(passenger) {
		this.passengerQueue.add(passenger);
	}

	/**
	 * Adds an attendant to the @field [attendantQueue], the attendant added here is one that just finished serving a passenger.
	 * @param attendant The attendant to be added back to the attendantQueue
	 */
	addAttendantToQueue(attendant) {
		this.attendantQueue.add(attendant);
	}

	/**
	 * Adds an event such as PassengerArrivalEvent, ServiceEndEvent and PassengerServiceEvent to the event queue.
	 * @param event The event to be added.
	 */
	addEvent(event) {
		this.eventQueue.add(event);
	}
	/**
	 * Returns the current time of the event taking place.
	 */
	printTime() {
		return this.getCurrentTime();
	}


	getCurrentTime() {
		return this.currentTime;
	}

	/**
	 * Resets the simulator
	 */
	resetSimulator() {
		this.passengerId = 0;
		this.attendantId = 0;
		this.currentTime = "0.00";
		this.eventQueue = new PriorityQueue();
		this.passengerQueue = new Queue();
		this.attendantQueue = new Queue();
		this.populateAttendants();
	}

	/**
	 * Resets the response holder
	 */
	resetResponseHolder() {
		this.responses = [];
	}

	/**
	 * Sets the number of passengers this train can contain.
	 * @param number The numerical value of passengers the train can contain.
	 */
	setNumberOfPassengers(number) {
		this.numberOfPassengers = number;
	}
	/**
	 * Sets the number of train instances to simulate
	 * @param number The numerical value of trains to simulate
	 */
	setNumberOfTrains(number) {
		this.numberOfTrains = number;

	}
	/**
	 * Initiates the simulating process of the train.
	 * 
	 * Here's a breakdown of this function actually does.
	 * 1. Starts by generating a random passenger arrival time based on the supplied average.
	 * 2. It then creates a PassengerArrivalEvent and adds it to the event queue.
	 * 3. It creates a Response object and adds it to the responseQueue
	 * 4. It enters a loop that automates the scheduling and simulation.
	 */
	simulate() {
		for (var i = 1; i <= this.numberOfTrains; ++i) {
			this.resetSimulator();
			var arrivalTime = this.getRandom(this.avgPassengerArrivalTime).toFixed(2);
			var e = new PassengerArrivalEvent(this, arrivalTime, this.numberOfPassengers);
			this.eventQueue.add(e);
			var response = new Response(this.printTime(), "Simulating train #" + i + "...", true);
			this.queueResponse(response);
			var stopAt = this.numberOfPassengers;
			while (true) {
				var idle = this.attendantQueue.size();
				var waiting = this.passengerQueue.size();
				var idleMessage = idle == 0 ? "No idle attendant" : idle == 1 ? "1 idle attendant" : idle + " idle attendants";
				var waitingMessage = waiting == 0 ? "No waiting passenger" : waiting == 1 ? "1 passenger waiting" : waiting + " passengers waiting";
				var response = new Response("null", idleMessage, false);
				this.queueResponse(response);
				var response2 = new Response("null", waitingMessage, false);
				this.queueResponse(response2);

				var event = this.eventQueue.poll();
				this.currentTime = event.getTime();
				event.happen();
				var cName = event.constructor.name;
				if (cName == "ServiceEndEvent") {
					if (--stopAt == 0)
						break;
				}

				if (!this.attendantQueue.isEmpty() && !this.passengerQueue.isEmpty()) {
					var c = this.passengerQueue.poll();
					var t = this.attendantQueue.poll();
					var pse = new PassengerServiceEvent(c, t, this, this.currentTime);
					pse.happen();
				}
			}
			var responseFull = new Response(this.printTime(), "Train #" + i + " full, heading to destination...", false);
			this.queueResponse(responseFull);
		}
		this.listener(this.responses);
	}
}
