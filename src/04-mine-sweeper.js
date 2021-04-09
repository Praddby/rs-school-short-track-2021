/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const deerMatrix = matrix.length - 1;
  const lenghtMatrix = matrix[0].length - 1;
  const newMatrix = matrix.map((it) => it.map(() => 0));

  for (let i = 0; i <= deerMatrix; i++) {
    for (let j = 0; j <= lenghtMatrix; j++) {
      if (matrix[i][j] === true) {
        if (i > 0) {
          newMatrix[i - 1][j] += 1;
          if (j > 0) newMatrix[i - 1][j - 1] += 1;
          if (j < lenghtMatrix) newMatrix[i - 1][j + 1] += 1;
        }
        if (i < deerMatrix) {
          newMatrix[i + 1][j] += 1;
          if (j > 0) newMatrix[i + 1][j - 1] += 1;
          if (j < lenghtMatrix) newMatrix[i + 1][j + 1] += 1;
        }
        if (j > 0) newMatrix[i][j - 1] += 1;
        if (j < lenghtMatrix) newMatrix[i][j + 1] += 1;
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
