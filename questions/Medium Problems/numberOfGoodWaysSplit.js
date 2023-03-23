const numSplits = (s) => {
  const intuitive = (s) => {
    let leftString = '';
    let counter = 0;
    for (let index = 0; index < s.length; index++) {
      leftString += s[index];
      const rightSlice = s.slice(index + 1, s.length);
      if (rightSlice && leftString) {
        let rightSliceArray = new Set([...rightSlice.split('')]);
        let leftSliceArray = new Set([...leftString.split('')]);
        rightSliceArray.size === leftSliceArray.size && counter++;
      }
    }
    return counter;
  };
  // optimized approach
  const optimized = (s) => {
    let leftSet = new Set();
    let rightSet = new Set();
    let sizesLeft = [];
    let sizesRight = [];
    let counter = 0;
    // left side comparison
    for (let index in s) {
      if (Number(index) === s.length - 1) break;
      leftSet.add(s[index]);
      sizesLeft.push(leftSet.size);
    }
    // right side
    for (let index = s.length - 1; index > 0; index--) {
      rightSet.add(s[index]);
      sizesRight.push(rightSet.size);
    }
    // comparison
    for (let index = 0; index < sizesLeft.length; index++) {
      if (sizesLeft[sizesLeft.length - 1 - index] === sizesRight[index]) {
        counter++;
      }
    }
    return counter;
  };

  console.log(optimized(s));
};
console.log(numSplits('aacaba'));
