// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let stringAWithoutSpecialChars = stringA.replace(/[^\w]/g, "").toLowerCase();
    let stringBWithoutSpecialChars = stringB.replace(/[^\w]/g, "").toLowerCase();
    
    let stringAConstruct = {};
    let stringBConstruct = {};

    for (let i = 0; i < stringAWithoutSpecialChars.length; i++) {

        stringAConstruct[stringAWithoutSpecialChars[i]] = stringAConstruct[stringAWithoutSpecialChars[i]] + 1 || 1;
    }

    for (let i = 0; i < stringBWithoutSpecialChars.length; i++) {
        stringBConstruct[stringBWithoutSpecialChars[i]] = stringBConstruct[stringBWithoutSpecialChars[i]] + 1 || 1;
    }

    let isAnagram = true;
    
    if(stringAWithoutSpecialChars.length >= stringBWithoutSpecialChars.length) {
        for (const key in stringAConstruct) {
            if(stringAConstruct[key] != stringBConstruct[key]) {
                isAnagram = false;
                break;
            }
        }
    } else {
        for (const key in stringBConstruct) {
            if(stringAConstruct[key] != stringBConstruct[key]) {
                isAnagram = false;
                break;
            }
        }
    }

    return isAnagram;
}

module.exports = anagrams;
