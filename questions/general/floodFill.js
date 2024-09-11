const floodFill = (image, sr, sc, color) => {
  const ROW = image.length;
  const COL = image[0].length;
  const originalColor = image[sr][sc];
  if (originalColor === color) {
    return image;
  }
  // dfs search
  const floodSearch = (row, col) => {
    // egde case for crossing boundary
    if (
      row < 0 ||
      col < 0 ||
      row >= ROW ||
      col >= COL ||
      image[row][col] !== originalColor
    ) {
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
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
