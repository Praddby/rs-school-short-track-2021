/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  str.split('').forEach((it, index, arr) => {
    if (it === arr[index + 1]) {
      count++;
    } else {
      result += count > 1 ? count + it : it;
      count = 1;
    }
  });
  return result;
}

module.exports = encodeLine;
