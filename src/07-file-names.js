/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function rename(arr, name, i) {
  let index = i || 1;
  return arr.includes(`${name}(${index})`) ? rename(arr, name, ++index) : `${name}(${index})`;
}

function renameFiles(names) {
  const newArr = [];
  names.forEach((it) => {
    if (newArr.includes(it)) {
      newArr.push(rename(newArr, it));
    } else {
      newArr.push(it);
    }
  });
  return newArr;
}

module.exports = renameFiles;
