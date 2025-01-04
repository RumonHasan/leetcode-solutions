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
// console.log(maxTotalSum([15, 10, 10, 10, 5]));

const divideStringsIntoK = (s, k, fill) => {
  const remainder = s.length % k;
  const fillCount = k - remainder;
  let result = [];
  let group = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (count === k) {
      result.push(group);
      group = '';
      count = 0;
    }
    group += char;
    count++;
    if (i === s.length - 1) {
      result.push(group);
    }
  }
  if (fillCount > 0 && remainder !== 0) {
    result[result.length - 1] += fill.repeat(fillCount);
  }

  return result;
};

console.log(divideStringsIntoK('abcdefghi', 3, 'x'));
