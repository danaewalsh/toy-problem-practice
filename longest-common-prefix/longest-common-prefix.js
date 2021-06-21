/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // iterate through the first word
    const firstWord = strs.shift();
    let prefix = '';
    for (var i = 0; i < firstWord.length; i++) {
        var currentLetter = firstWord[i];
        var allWordsHaveLetter = 0;
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] === currentLetter) {
                allWordsHaveLetter++;
            }
        }
        if (allWordsHaveLetter === strs.length) {
            prefix += currentLetter;
        } else if (allWordsHaveLetter < strs.length) {
            break;
        }
    }
    // look at each letter in the first word, and compare it to all other words in the array
        // if all words have that letter -- add letter to prefix and continue
        // if not, break and return prefix 
    
    return prefix;
};