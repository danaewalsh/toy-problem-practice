/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    // iterate through word, and check to see if current value is an integer or a letter
        // if integer, push to holding string
        // if letter, push space ' ' to holding string
    
    // transform the string into an array, seperated by spaces ' ' 
    // iterate through the array and add each value to the result set
    
    // return the length of the result set
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var numbersOnly = ''
    for (var i = 0; i < word.length; i++) {
        let currentValue = word[i];
        if (alphabet.indexOf(currentValue) >= 0) {
            numbersOnly += ' '
        } else {
            numbersOnly += currentValue
        }  
    }
    
    var output = new Set();
    const arrayOfNumbers = numbersOnly.split(' ')
    console.log('arrayOfNumbers: ', arrayOfNumbers)
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        let currentValue = arrayOfNumbers[i];
        let number = helperFunction(currentValue)
        if (currentValue === '') {
            continue;
        //}  else if (number === Infinity) {
        //    return arrayOfNumbers.length;
        } else {
            output.add(number);
        }
    }
    return output.size;
};



var helperFunction = function(intCharacters) {
    // Will return '1' when given '1', '01', '00001', etc.
    var result = ''
    var haveHitANonZeroIntChar = false
    for (char of intCharacters) {
        if ((char === '0') && (!haveHitANonZeroIntChar)) {
            continue
            }
        else {
            result += char;
            haveHitANonZeroIntChar = true;
        }
    }
    return result
}