module.exports = function solveSudoku(matrix) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const imp = [];
  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          if (!matrix[row][col]) {
              let segmPosCol = Math.floor(col / 3) * 3;
              let segmPosInRow = Math.floor(row / 3) * 3;

              for (let i = 0; i < 9; i++) {
                  imp.push(matrix[segmPosInRow + i % 3][segmPosCol + Math.floor(i / 3)]);
                  imp.push(matrix[row][i]);
                  imp.push(matrix[i][col]);
              }

              imp.filter(number => number > 0);
              let possible = numbers.filter(number => imp.indexOf(number) < 0);

              for (let i = 0; i < possible.length; i++) {
                  matrix[row][col] = possible[i];
                  if (solveSudoku(matrix)) return solveSudoku(matrix);  
              }
              matrix[row][col] = 0;

              return false;
          }
      }
  }
  return matrix;
}
