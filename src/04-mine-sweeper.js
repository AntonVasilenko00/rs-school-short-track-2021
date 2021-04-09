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
  function createZeroMatrix(initialMatrix) {
    const zeroMatrix = [];
    for (let i = 0; i < initialMatrix.length; i++) {
      const buffArr = [];
      for (let j = 0; j < initialMatrix[i].length; j++) buffArr.push(0);
      zeroMatrix.push(buffArr);
    }
    return zeroMatrix;
  }
  function isWithinCell(x1, x2, y1, y2) {
    if (!(x1 === x2 && y1 === y2)) {
      return (x2 >= x1 - 1 && x2 <= x1 + 1) && (y2 >= y1 - 1 && y2 <= y1 + 1);
    }
    return false;
  }
  const zeroMatrix = createZeroMatrix(matrix);

  for (let y1 = 0; y1 < matrix.length; y1++) {
    for (let x1 = 0; x1 < matrix[y1].length; x1++) {
      for (let y2 = 0; y2 < zeroMatrix.length; y2++) {
        for (let x2 = 0; x2 < zeroMatrix[y2].length; x2++) {
          if (matrix[y1][x1] && isWithinCell(x1, x2, y1, y2)) {
            zeroMatrix[y2][x2]++;
          }
        }
      }
    }
  }
  return zeroMatrix;
}

module.exports = minesweeper;
