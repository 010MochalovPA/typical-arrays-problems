
exports.min = function min (array) {
  if (!array || array.length === 0){
    return 0;
  }
  let minResult = array[0];
  array.forEach(item => { if (minResult > item) minResult = item });
  return minResult;    
}

exports.max = function max (array) {
  if (!array || array.length === 0){
    return 0;
  }
  let maxResult = array[0];
  array.forEach(item => { if (maxResult < item) maxResult = item });
  return maxResult;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0){
    return 0;
  }
  return array.reduce((sum, current) => sum + current, 0) / array.length;
}
