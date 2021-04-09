/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (array[mid] < value) {
      left = mid + 1;
    } else if (array[mid] > value) {
      right = mid - 1;
    } else return mid;
  }
  return -1;
}

module.exports = findIndex;
