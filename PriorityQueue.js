/**
*
* A simple Priority queue that uses an array to store
* train events.
* It makes the sure the events are sorted based on their time.
*
**/


class PriorityQueue {

	constructor() {
		//initialize an empty array to hold events.
		this.items = [];
	}

	/**
	* returns the size of the queue
	*
	**/
	size() {
		return this.items.length;
	}

    /**
	* @return the object with the highest priority
	*
	*/

	poll() {
		return this.items.shift();
	}

    /**
	* Adds a train event to the queue.
	* @param event,  the event to be added.
	*
	**/

	add(event) {
		var contains = false;
		for (var i = 0; i < this.size(); ++i) {
			var ev = this.items[i];
			if (parseFloat(ev.getTime()) > parseFloat(event.getTime())) {
				this.items.splice(i, 0, event);
				contains = true;
				break;
			}
		}

		if (!contains) {
			this.items.push(event);
		}
	}

	/**
	* return if the queue is empty or not
	*
	**/
	isEmpty() {
		return size() == 0;
	}

}

