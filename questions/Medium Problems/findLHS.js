const findLHS = (nums) => {
  let numMap = new Map();
  for (let index in nums) {
    const number = Number(nums[index]);
    if (numMap.has(number)) {
      numMap.set(number, numMap.get(number) + 1);
    } else {
      numMap.set(number, 1);
    }
  }
  // checking difference by subtracting from main array
  let mapKeys = [...numMap.keys()];
  let longestLength = 0;
  for (let key of mapKeys) {
    if (numMap.has(Number(key) - 1)) {
      longestLength = Math.max(
        numMap.get(Number(key)) + numMap.get(Number(key) - 1),
        longestLength
      );
    }
  }
  return longestLength;
};

// longest harmonious subsequence means that all numbers present here will be within the range of maximum and minimum numbers that have a difference of one
//console.log(findLHS([-1, 0, -1, 0, -1, 0, -1]));

// answer +: 1,4,2,1,2,3
