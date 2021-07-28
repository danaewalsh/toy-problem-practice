/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var array = x.toString().split('');
    
    while (array.length > 1) {
        var first = array.shift();
        var last = array.pop();
        if (first !== last) {
            return false;
        }
    }
    return true;
};