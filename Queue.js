/**
 * A simple class for holding objects based on the first in first out principle.
 */

class Queue {
	constructor() {
		this.item = [];
	}

	add(obj) {
		this.item.push(obj);
	}

	poll() {
		return this.item.shift();
	}

	size() {
		return this.item.length;
	}

	isEmpty() {
		return this.size() == 0;
	}
}
