/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var array = s.split(' ');
    console.log('array', array)
    if (array.length > 0) {
        var resultArray = [];
        array.forEach((value, i) => {
            if (value !== '') {
                resultArray.push(value);
            }
        })
        
        return (resultArray.length > 0 ? resultArray[resultArray.length - 1].length : 0);
    } else {
        return 0;
    }
};