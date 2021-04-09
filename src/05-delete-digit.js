/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const lowNumber = (`${n}`).split('').sort((a, b) => a - b)[0];
  const arrStr = (`${n}`).split('');
  arrStr.splice(arrStr.indexOf(lowNumber), 1);
  return +arrStr.join('');
}

module.exports = deleteDigit;
