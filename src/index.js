module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = matrix[row][col]

      if (cell === 0) {
        matrix[row][col] = getCandidates(matrix, row, col);
      }
    }

  }
  return matrix;
}


function getCandidates(matrix, row, col) {
  let rowCand = [];

  const writtenNumbers = matrix[row].reduce(function (set, cell) {
    return set.add(cell);
  }, new Set());

  const colSet = new Set();
  for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
    colSet.add(matrix[rowNumber][col]);
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const colCand = numbers.filter(function(number) {
    return !colSet.has(number);
  });

  // if there is only one canditate just return it
  if (colCand.size === 1) {
    return [...colCand][0];
  }

  rowCand = numbers.filter(function(number) {
    return !writtenNumbers.has(number);
  }
  )

  if (rowCand.size === 1) {
    return [...rowCand][0];
  }

  return rowCand;
}