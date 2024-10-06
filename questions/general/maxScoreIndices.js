const maxScoreIndices = (nums) => {
  const makeArray = (len) => new Array(len).fill(0);
  const left = makeArray(nums.length);
  const right = makeArray(nums.length);
  // filling up right
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      left[i] = (left[i - 1] ? left[i - 1] : nums[i]) + 1;
    } else {
      left[i] = left[i - 1] ? left[i - 1] : 0;
    }
  }
  // filling up left
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = (i < nums.length - 1 ? right[i + 1] : 0) + nums[i];
  }
  let result = [];
  let maxScore = 0;

  for (let i = 0; i <= nums.length; i++) {
    let score = left[i] + right[i];
    if (score > maxScore) {
      maxScore = score;
      result = [i];
    } else if (score === maxScore) {
      result.push(i);
    }
  }

  return result;
};

console.log(maxScoreIndices([1, 1]));
