// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    let half = str.length / 2;

    for (let i = 0, j = str.length - 1; i <= half; i++, j--) {
        if(str[i] != str[j]) {
            return false;
        }
    }

    return true;
}

module.exports = palindrome;
