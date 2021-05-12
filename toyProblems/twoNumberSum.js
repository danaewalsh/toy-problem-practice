function twoNumberSum(array, targetSum) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if ( i === j ) {
				continue;
			}

			var sum = array[i] + array[j];
			if (sum === targetSum) {
				result.push(array[i]);
				result.push(array[j]);
				return result;
			}
		}
	}
	return result;
}