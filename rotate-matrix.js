module.exports = function (matrix) {
  "use strict";
  if (matrix === null || matrix === undefined) throw {};
  if (matrix.length === 0 ) return matrix;
  swap(matrix, 0,1);
  swap(matrix, 2,3);
  swap(matrix, 0,2);
  return matrix;
};

function swap(matrix, a,b) {
  matrix[a] = matrix[b] - matrix[a];
  matrix[b] = matrix[b] - matrix[a];
  matrix[a] = matrix[a] + matrix[b];
}
