// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		if (this.head === null) {
			this.head = new Node(data);
		} else {
			var node = new Node(data);
			node.next = this.head;
			this.head = node;
		}
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (this.head === null) {
			return null;
		}

		var node = this.head;

		while (node.next) {
			node = node.next;
		}

		return node;
	}

	size() {
		if (this.head === null) {
			return 0;
		}

		var count = 1;
		var node = this.head;

		while (node.next) {
			count++;
			node = node.next;
		}

		return count;
	}

	removeFirst() {
		if (this.head === null) {
			return;
		}

		if (this.head.next === null) {
			this.head = null;
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (this.head === null) {
			return;
		}

		if (this.head.next === null) {
			this.head = null;
			return;
		}

		var node = this.head;

		while (node.next.next !== null) {
			node = node.next;
		}

		node.next = null;
	}

	clear() {
		this.head = null;
	}

	insertLast(data) {
		if (this.head === null) {
			this.head = new Node(data);
			return;
		}

		var node = this.head;

		while (node.next != null) {
			node = node.next;
		}

		node.next = new Node(data);
	}

	getAt(index) {
		if (this.size() < index + 1) {
			return null;
		}

		var currentNodeIndex = 0;

		var node = this.head;

		while (currentNodeIndex < index) {
			node = node.next;
			currentNodeIndex++;
		}

		return node;
	}
}

module.exports = { Node, LinkedList };
