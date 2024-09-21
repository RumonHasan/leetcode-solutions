const numberOfWaysSelectingBuildings = (s) => {
  const makeArray = (len) => new Array(len).fill(0);
  // populating 0s and 1s
  const populateArray = (type) => {
    let left = makeArray(s.length);
    let right = makeArray(s.length);
    // from left
    for (let i = 0; i < s.length; i++) {
      if (s[i] === type) {
        left[i] = i === 0 ? 1 : left[i - 1] + 1;
      } else {
        left[i] = i === 0 ? 0 : left[i - 1];
      }
    }
    // from right
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === type) {
        right[i] = i === right.length - 1 ? 1 : right[i + 1] + 1;
      } else {
        right[i] = i === right.length - 1 ? 0 : right[i + 1];
      }
    }
    return {
      left,
      right,
    };
  };

  let { left: zeroLeft, right: zeroRight } = populateArray('0');
  console.log(zeroLeft, zeroRight, '0');
  let { left: oneLeft, right: oneRight } = populateArray('1');
  let counter = 0;

  // main iteration to check for 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      let leftVal = zeroLeft[i - 1] ? zeroLeft[i - 1] : 0;
      let rightVal = zeroRight[i + 1] ? zeroRight[i + 1] : 0;
      counter += leftVal * rightVal;
    }
  }
  // main iteration to check for 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      let leftVal = oneLeft[i - 1] ? oneLeft[i - 1] : 0;
      let rightVal = oneRight[i + 1] ? oneRight[i + 1] : 0;
      counter += leftVal * rightVal;
    }
  }
  return counter;
};

const optimizedWay = () => {
  // just subtract the remaining count;
  let zeros = 0;
  let ones = 0;
  let result = 0;

  // First pass: count zeros and ones
  for (let char of s) {
    if (char === '0') {
      zeros++;
    } else {
      ones++;
    }
  }

  let leftZeros = 0;
  let leftOnes = 0;

  // Second pass: calculate combinations
  for (let char of s) {
    if (char === '0') {
      result += leftOnes * (ones - leftOnes);
      leftZeros++;
    } else {
      result += leftZeros * (zeros - leftZeros);
      leftOnes++;
    }
  }

  return result;
};

console.log(numberOfWaysSelectingBuildings('001101'));
