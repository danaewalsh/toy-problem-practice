/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = '';
    var string = x.toString();
    for (var i = string.length - 1; i >= 0; i--) {
        if (i === string.length - 1) {
            if (string[i] === '0') {
                continue;
            }
        } else if (i === 0) {
            if (string[i] === '-') {
                result = '-' + result;
                continue;
            }
        }
        result += string[i]
    }
    
    var number = Number(result);
    
    if (number < -2147483648 || number > 2147483648) {
        return 0;
    } else {
        return number;
    }

};