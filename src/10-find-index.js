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

function findIndex(array, left, right, value) {
  if (right >= left) {
    const middleIndex = Math.floor(left + (right - left) / 2);
    if (array[middleIndex] === value) return middleIndex;
    if (array[middleIndex] > value) return findIndex(array, left, middleIndex - 1, value);
    return findIndex(array, middleIndex + 1, right, value);
  }
  return -1;
}

function findPos(array, value) {
  let low = 0;
  let height = 1;
  let val = array[0];
  while (val < value) {
    low = height;
    height *= 2;
    val = array[height];
  }
  return findIndex(array, low, height, value);
}

module.exports = findPos;
