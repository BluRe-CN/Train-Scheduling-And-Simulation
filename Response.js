/**
 * A simple class that stores the simulation responses.
 */

class Response {
	/**
	 * 
	 * @param  time The time the response was generated
	 * @param  message The content of the response
	 * @param  isPassenger Is the message generated for the passenger or for the train.
	 */
	constructor(time, message, isPassenger) {
		this.time = time;
		this.message = message;
		this.isPassenger = isPassenger;
	}

	/**
	 * @returns The time this response was generated
	 */
	getTime() {
		return this.time;
	}

	/**
	 * @returns The message this reponse object holds.
	 */
	getMessage() {
		return this.message;
	}

	/**
	 * @returns A boolean value indicating wether the message was generated for the passenger or for the train.
	 */
	isPassenger() {
		return this.isPassenger;
	}
}
