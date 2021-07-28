// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // if array is empty -- return 0
  if (!array.length) {
    return 0;
  }
  // pop off the last element of an array and save it to a variable
  let copy = array.slice(0)
  let lastValue = copy.pop();

  return lastValue + sum(copy);
};