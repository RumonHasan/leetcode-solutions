"use strict";

var floodFill = function floodFill(image, sr, sc, color) {
  var ROW = image.length;
  var COL = image[0].length;
  var originalColor = image[sr][sc];

  if (originalColor === color) {
    return image;
  } // dfs search


  var floodSearch = function floodSearch(row, col) {
    // egde case for crossing boundary
    if (row < 0 || col < 0 || row >= ROW || col >= COL || image[row][col] !== originalColor) {
      return;
    }

    image[row][col] = color;
    floodSearch(row + 1, col);
    floodSearch(row - 1, col);
    floodSearch(row, col + 1);
    floodSearch(row, col - 1);
  };

  floodSearch(sr, sc);
  return image;
}; // console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );


var islandPerimeter = function islandPerimeter(grid) {
  var ROW = grid.length;
  var COL = grid[0].length; // main dfs check for island perimeter check

  var islandCheck = function islandCheck(row, col) {
    // returns 1 here since it checks all the border anyways
    if (row >= ROW || col >= COL || row < 0 || col < 0 || grid[row][col] === 0) return 1; // only after checking u can mark as visited

    if (grid[row][col] == 'R') {
      return 0;
    }

    grid[row][col] = 'R';
    return islandCheck(row, col - 1) + islandCheck(row + 1, col) + islandCheck(row - 1, col) + islandCheck(row, col + 1);
  };

  for (var i = 0; i < ROW; i++) {
    for (var j = 0; j < COL; j++) {
      if (grid[i][j] === 1) {
        return islandCheck(i, j);
      }
    }
  }
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));