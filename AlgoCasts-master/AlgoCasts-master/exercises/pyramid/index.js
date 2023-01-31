// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	for (let j = 0; j < n; j++) {
		var line = "";

		for (let i = 0; i < n - j - 1; i++) {
			line += " ";
		}

		for (let k = 0; k < j * 2 + 1; k++) {
			line += "#";
		}

		for (let i = 0; i < n - j - 1; i++) {
			line += " ";
		}

		console.log(line);
	}
}

module.exports = pyramid;
