const maxPower = (s) => {
  let index = 0;
  let preChar = s[0];
  let maxCount = 0;
  while (index < s.length) {
    let localMaxCount = 0;
    if (s[index] == preChar) {
      while (s[index] === preChar && index < s.length) {
        localMaxCount++;
        index++;
      }
    } else {
      // index need not be incremented here but the letter changed in order to match the above condition
      preChar = s[index];
    }
    maxCount = Math.max(maxCount, localMaxCount);
  }
  return maxCount;
};

// console.log(maxPower('bbcccddddeeeeedcba'));
