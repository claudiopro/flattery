
/**
 * Flattens an array of arbitrarily nested arrays of integers into a flat array
 * of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].
 *
 * @param {Array} array_in An array of arbitrarily nested arrays of integers
 * @param {Boolean} [deep] Set to true to allow passing in a scalar
 * @returns A flattened representation of array_in
 */
function flattery(array_in, deep) {
  if (!array_in.length) {
    if (!deep) {
      // We can't accept a scalar value at top level
      throw 'You must pass in an array!';
    }
    // Return an array with a single element
    return [array_in];
  }
  var buf = [];
  for (var i = 0; i < array_in.length; i++) {
    // Recurse on the i-th element
    // Use Array.prototype.push.apply() to alter buf in place
    Array.prototype.push.apply(buf, flattery(array_in[i], true));
  }
  return buf;
}

module.exports = flattery;
