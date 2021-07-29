// 4. Check if a number is even.
var isEven = function(n) {
  // recursively divide number by 2
  if (n === 0) {
    return true
  } else if (n < 0) {
    return false;
  } else {
    return isEven(n - 2)
   }
};