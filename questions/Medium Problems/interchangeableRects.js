const interchangeableRectangles = (rectangles) => {
  let rectHash = {};
  for (let index = 0; index < rectangles.length; index++) {
    const width = rectangles[index][0];
    const height = rectangles[index][1];
    const ratio = width / height;
    // storing the ratio in a hash map
    if (rectHash[ratio]) {
      rectHash[ratio]++;
    } else {
      rectHash[ratio] = 1;
    }
  }
  // checking for pairable count
  let pairCount = 0;
  for (const [_, value] of Object.entries(rectHash)) {
    if (value > 1) {
      // formula
      pairCount += (value * (value - 1)) / 2;
    }
  }
  return pairCount;
};
// 5=> 10
// 4=> 6

// store the ratios of the rectangles in a hash map first then compare with others
// console.log(
//   interchangeableRectangles([
//     [4, 8],
//     [3, 6],
//     [10, 20],
//     [15, 30],
//   ])
// );
