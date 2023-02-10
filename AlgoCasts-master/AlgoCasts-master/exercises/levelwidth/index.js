// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	var nodes = [root];
	nodes.push("s");

	var levelsResult = [];
	var counter = 0;

	while (nodes.length) {
		var node = nodes.shift();

		if (node === "s") {
			levelsResult.push(counter);
			if (nodes.length === 0) {
				break;
			}
			counter = 0;
			nodes.push("s");
		} else {
			counter++;
			for (let child of node.children) {
				nodes.push(child);
			}
		}
	}

	return levelsResult;
}

module.exports = levelWidth;
