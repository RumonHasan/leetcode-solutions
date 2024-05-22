const triangle = (triangle) => {
  // tabulation approach
  let newTri = [];
  for (let i in triangle) {
    const currRow = triangle[i];
    newTri.push(new Array(currRow.length).fill(0));
  }
  newTri[0][0] = triangle[0][0];
  // main logic using top down approach
  for (let i = 1; i < newTri.length; i++) {
    const currRow = newTri[i];
    const rowIndex = i;
    for (let j = 0; j < currRow.length; j++) {
      const colIndex = j;
      if (rowIndex === 1) {
        newTri[i][j] = triangle[0][0] + triangle[i][j];
      } else if (rowIndex > 1) {
        if (colIndex === 0) {
          newTri[i][j] = newTri[i - 1][0] + triangle[i][j];
        } else if (colIndex === currRow.length - 1) {
          newTri[i][j] =
            newTri[i - 1][newTri[i - 1].length - 1] + triangle[i][j];
        } else {
          // middle indices by checking max or min
          let midVal = Math.min(
            triangle[i][j] + newTri[i - 1][j - 1],
            triangle[i][j] + newTri[i - 1][j]
          );
          newTri[i][j] = midVal;
        }
      }
    }
  }
  return Math.min(...newTri[newTri.length - 1]);
};

// using the top to bottom approach and keeping in mind the middle indices
console.log(triangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
