/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s2.split('');
  let result = 0;
  s1.split('').forEach((it) => {
    if (arr.indexOf(it) !== -1) {
      result++;
      arr.splice(arr.indexOf(it), 1);
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
