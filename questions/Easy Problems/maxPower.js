const maxPower = (s) => {
  let prevChar = s[0];
  let count = 1;
  let maxCount = 0;

  for (let index = 1; index < s.length; index++) {
    if (s[index] === prevChar) {
      count++;
      maxCount = Math.max(count, maxCount);
    }
    if (s[index] !== prevChar) {
      count = 1;
      prevChar = s[index];
    }
  }
  return maxCount === 0 ? 1 : maxCount;
};

//console.log(maxPower('abbcccddddeeeeedcba'));
