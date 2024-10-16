const sortEvenOdd = (nums) => {
  let dp = new Array(nums.length).fill(0);
  let odd = [];
  let even = [];
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (i % 2 === 0) {
      even.push(currNum);
    } else {
      odd.push(currNum);
    }
  }
  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);
  let oddIndex = 0;
  let evenIndex = 0;
  let check = false;
  let index = 0;
  while (index < dp.length) {
    if (!check && evenIndex < even.length) {
      dp[index] = even[evenIndex];
      check = true;
      evenIndex++;
    } else {
      if (oddIndex < odd.length) {
        dp[index] = odd[oddIndex];
        check = false;
        oddIndex++;
      }
    }
    index++;
  }
  return dp;
};

// odd indices is descending
// even indices is ascending
console.log(sortEvenOdd([4, 1, 2, 3]));
