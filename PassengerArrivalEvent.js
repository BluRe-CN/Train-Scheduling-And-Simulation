/**
* A simple class that is reponsible for scheduling the arrival of passengers
*
**/

class PassengerArrivalEvent{
	/**
	 * @param train The instance of the train
	 * @param time The passenger arrival time
	 * @param numberOfPersons The total number of people the train can contain
	 */
	constructor(train,time,numberOfPersons){
		this.train = train;
		this.time = time;
		this.numberOfPersons = numberOfPersons;
	}
	
	/**
	 * @returns The auto generated number of the passenger.
	 */
	getId(){
		return this.passenger.getId();
	}
	
	/**
	 * @returns The passenger arrival time
	 */
	getTime(){
		return this.time;
	}
	
	/**
	 * @returns An instance of the train this passenger is subject to
	 */
	getTrain(){
		return this.train;
	}
	
	/**
	 * A function that is executed to initiate the passenger train scheduling process.
	 * 
	 * It starts by creating an object of type Passenger, the virtual passenger in our virtual train.
	 * A Response object is also generated and queued for simulation.
	 * The passenger is enqueued in the passenger queue list.
	 * A new arrival random time is generated for the next passenger arrival and added into the train event queue,
	 * But is only done when the number of passengers the train can contain is yet to be complete.
	 */
	happen(){
		var train = this.train;
		this.passenger  = new Passenger(train, train.getAvgPassengerTransactionTime());
		var response = new Response(train.printTime()," Passenger "+this.passenger.getId()+" has arrived.",true);
		train.queueResponse(response);
		this.passenger.enterQueue();
		var interval = train.getRandom(train.getAvgPassengerArrivalTime());
		var currentTime = train.getCurrentTime();
		var nextArrival = Number(parseFloat(currentTime)+parseFloat(interval)).toFixed(2);
		if(this.getId() < this.numberOfPersons)
		train.addEvent(new PassengerArrivalEvent(train,nextArrival,this.numberOfPersons));
	}
}
