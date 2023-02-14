// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data === this.data) {
			return null;
		}

		var node = this;
		var newNode = new Node(data);

		while (true) {
			if (data < node.data) {
				if (node.left === null) {
					node.left = newNode;
					return;
				} else {
					node = node.left;
				}
			}

			if (data > node.data) {
				if (node.right === null) {
					node.right = newNode;
					return;
				} else {
					node = node.right;
				}
			}
		}
	}

	contains(data) {
		var node = this;

		while (data !== node.data) {
			if (data < node.data) {
				if (node.left === null) {
					return null;
				}
				node = node.left;
			}

			if (data > node.data) {
				if (node.right === null) {
					return null;
				}
				node = node.right;
			}
		}

		return node;
	}
}

module.exports = Node;
