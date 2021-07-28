/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    
    // iterate through string to group roman numerals together and check to see if there are any smaller            numbers before large
    const array = [];
    const numeralArray = s.split('');
    
    while (numeralArray.length > 0) {
        var first = numerals[numeralArray[0]];
        var second = numerals[numeralArray[1]]
        if (first < second) {
            var total = second - first
            array.push(total)
            numeralArray.shift();
            numeralArray.shift();
        } else {
            array.push(first);
            numeralArray.shift()
        }
    }
    
    var answer = 0;
    array.forEach(element => answer += element);
    return answer;
};