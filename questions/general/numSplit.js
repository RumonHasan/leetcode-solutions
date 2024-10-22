const numSplit = (s) => {
  let rightSet = new Set();
  let leftSet = new Set();
  let counter = 0;

  let left = new Array(s.length).fill(0);
  let right = new Array(s.length).fill(0);
  // populating the sets and sizes
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    leftSet.add(currChar);
    left[i] = leftSet.size;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    const currChar = s[i];
    rightSet.add(currChar);
    right[i] = rightSet.size;
  }

  // comparing both the left and right array
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i + 1]) {
      counter++;
    }
  }

  return counter;
};

// using split array and adding based on set sizes
// console.log(numSplit('aacaba'));

// keeping track of even and odd indices separately in order to check for equality
const waysToMakeFair = (nums) => {
  let even = new Array(nums.length).fill(0);
  let odd = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (i % 2 === 0) {
      even[i] = i === 0 ? currNum : even[i - 1] + currNum;
      odd[i] = odd[i - 1] ? odd[i - 1] : 0;
    } else {
      odd[i] = odd[i - 1] + currNum;
      even[i] = even[i - 1] ? even[i - 1] : 0;
    }
  }
  let fairCounter = 0;
  const len = nums.length - 1;
  // sorting out the even and odd indices
  for (let i = 0; i < nums.length; i++) {
    // note even becomes odd and odd becomes even;
    if (i === 0) {
      const evenSum = odd[len];
      const oddSum = even[len] - nums[0];
      if (evenSum === oddSum) fairCounter++;
    } else {
      const evenSum = even[i - 1] + (odd[len] - odd[i]);
      const oddSum = odd[i - 1] + (even[len] - even[i]);
      if (evenSum === oddSum) fairCounter++;
    }
  }
  return fairCounter++;
};

//console.log(waysToMakeFair([2, 1, 6, 4]));

/**
 * 1 6 4
 * 2 6 4 - Even = 6 , Odd = 6
 */
// apple
const appleDistribution = (apple, capacity) => {
  capacity.sort((a, b) => b - a);
  let appleSum = apple.reduce((a, b) => a + b, 0);
  let boxCount = 0;
  // check apple distribution
  for (let i = 0; i < capacity.length; i++) {
    const currSumCap = capacity[i];
    appleSum -= currSumCap;
    boxCount++;
    if (appleSum === 0 || appleSum < 0) {
      break;
    }
  }
  return boxCount++;
};

//console.log(appleDistribution([5, 5, 5], [2, 4, 2, 7]));
