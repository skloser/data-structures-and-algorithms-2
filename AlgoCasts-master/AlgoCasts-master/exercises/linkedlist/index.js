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
		this.insertAt(data, 0);
	}

	getFirst() {
		return this.getAt(0);
	}

	getLast() {
		return this.getAt(this.size() - 1);
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
		this.removeAt(0);
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

	forEach(fn) {
		var node = this.head;

		while (node) {
			fn(node);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}

	removeAt(index) {
		if (index === 0 && this.head !== null) {
			this.head = this.head.next;
		}

		if (this.checkIfOutOfBoundIndex(index)) {
			return null;
		}

		var previousNode = this.getAt(index - 1);
		var nextNode = this.getAt(index + 1);

		previousNode.next = nextNode;
	}

	clear() {
		this.head = null;
	}

	insertAt(data, index) {
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		if (this.checkIfOutOfBoundIndex(index)) {
			var node = this.head;
			while (node.next) {
				node = node.next;
			}

			node.next = new Node(data);
			return;
		}

		var previousNode = this.getAt(index - 1);
		var shiftNode = this.getAt(index);

		var insertNode = new Node(data, shiftNode);
		previousNode.next = insertNode;
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

	checkIfOutOfBoundIndex(index) {
		return this.size() < index + 1;
	}

	getAt(index) {
		if (this.checkIfOutOfBoundIndex(index)) {
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
