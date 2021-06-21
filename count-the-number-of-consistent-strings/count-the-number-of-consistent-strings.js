/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // iterate through words array
        // iterate through individual word
        // check to see if the indexOf each letter in the allowed string is positive
        // if each letter exists in allowed, increment output by 1
    // return output
    
    var result = 0;
    
    for (var i = 0; i < words.length; i++) {
        var allLettersPresent = 0;
        for (var j = 0; j < words[i].length; j++) {
            if (allowed.indexOf(words[i][j]) >= 0) {
                allLettersPresent++
            }
        }
        if (allLettersPresent === words[i].length) {
            result++
        }
    }
    return result;
};