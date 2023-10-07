const minimumTotal = (triangle) => {
  const generalIntuitiveApproach = () => {
    for (let index = triangle.length - 2; index >= 0; index--) {
      for (let subIndex = 0; subIndex < triangle[index].length; subIndex++) {
        const currentEl = triangle[index][subIndex];
        const nextRowLeftEl = triangle[index + 1][subIndex];
        const nextRowRightEl = triangle[index + 1][subIndex + 1];
        const sum = currentEl + nextRowLeftEl;
        const sumTwo = currentEl + nextRowRightEl;
        triangle[index][subIndex] = Math.min(sum, sumTwo);
      }
    }
    return triangle[0][0];
  };
};

// starting from second last in order to get the minimum of last two values
// console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
