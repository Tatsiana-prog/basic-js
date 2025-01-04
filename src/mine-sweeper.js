const { NotImplementedError } = require('../extensions/index.js');

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
  const rows = matrix.length;
  const cols = matrix[0].length;
    const countMines = (row, col) => {
    let mineCount = 0;
    
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1], // vertical and horizontal
      [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonal
    ];
    
    for (let [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol]) {
        mineCount++;
      }
    }
    
    return mineCount;
  };
  
 const result = [];
  
  for (let row = 0; row < rows; row++) {
    result[row] = [];
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col]) {
        result[row][col] = 1;  // Or leave `true` if you prefer
      } else {
        result[row][col] = countMines(row, col);
      }
    }
  }
  
  return result;
}

module.exports = {
  minesweeper
};

