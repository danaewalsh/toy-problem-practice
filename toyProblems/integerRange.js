var range = function(x, y) {
  if (x === y) {
    return [];
  } else if (x < y) {
    if (x === (y - 1)) {
      return [];
    }
    return [x + 1].concat(range(x + 1, y))
  } else {
    if (x === (y + 1)) {
      return [];
    }
    return [x - 1].concat(range(x - 1, y))
  }
};