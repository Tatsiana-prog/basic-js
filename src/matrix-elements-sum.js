const { NotImplementedError } = require('../extensions/index.js');

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
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Iterate over columns
  for (let col = 0; col < cols; col++) {
    // For each column, iterate over rows
    for (let row = 0; row < rows; row++) {
      // If we encounter a zero in the current column, break the loop for this column
      if (matrix[row][col] === 0) {
        break;
      }
      // Add the value to the sum if it's not blocked
      sum += matrix[row][col];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};

