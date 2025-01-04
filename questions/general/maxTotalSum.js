const maxTotalSum = (maximumHeight) => {
  maximumHeight.sort((a, b) => b - a);
  let result = [];
  let limitChecker = maximumHeight[0];
  result.push(limitChecker);

  for (let i = 1; i < maximumHeight.length; i++) {
    const maxHeight = maximumHeight[i];
    // add number to result
    limitChecker = Math.min(maxHeight, limitChecker - 1);
    result.push(limitChecker);
    if (limitChecker < 1) {
      return -1;
    }
  }

  return result.reduce((acc, curr) => acc + curr, 0);
};

/**[
    4,
    3,
    3,
    2
] 
        
*/
console.log(maxTotalSum([15, 10, 10, 10, 5]));
