/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeros = [];
  let sum = 0;
  matrix.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 0) zeros.push({ i, j });
    });
  });
  matrix.forEach((row, i) => row.forEach((col, j) => {
    let isBelowZero = false;
    if (zeros.length > 0) {
      if (!zeros.find((zero) => (zero.j === j) && (zero.i > i))) isBelowZero = true;
    }
    sum += isBelowZero ? 0 : col;
  }));
  return sum;
}

module.exports = getMatrixElementsSum;
