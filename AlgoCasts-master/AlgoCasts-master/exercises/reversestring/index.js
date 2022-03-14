// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let newString = '';

    if(str == null) {
        return null;
    }

    if(str.length === 1) {
        return str;
    }

    for(let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

module.exports = reverse;