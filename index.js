
/**
 * Flattens an array of arbitrarily nested arrays of integers into a flat array
 * of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].
 *
 * New non-recursive implementation for low stack footprint
 *
 * @param {Array} arr An array of arbitrarily nested arrays of integers
 * @param {Boolean} [deep] Set to true to allow passing in a scalar
 * @returns A flattened representation of arr
 */
function flattery(arr, deep) {
  if (!(arr instanceof Array) && !deep) {
    throw 'You must pass in an array!';
  }

  var stack = [arr],
    flat = [];

  while (stack.length) {
    var curr = stack.pop();

    while (curr && curr.length) {
      var  el = curr.shift();

      if (el instanceof Array) {
        stack.push(curr);
        curr = el;
        continue;
      }

      flat.push(el);
    }
  }

  return flat;
}

module.exports = flattery;
