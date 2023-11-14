const sortArrayByParity = (nums) => {
  console.log(nums);
  let odd = [];
  let even = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 === 0) {
      even.push(nums[index]);
    } else {
      odd.push(nums[index]);
    }
  }
  return [...even, ...odd];
};

const sortEvenOdd = (nums) => {
  const intuitive = () => {
    let dp = new Array(nums.length).fill(0);
    let oddIndices = [];
    let evenIndices = [];
    for (let index in nums) {
      const number = nums[index];
      Number(index) % 2 === 0
        ? evenIndices.push(number)
        : oddIndices.push(number);
    }
    evenIndices.sort((a, b) => a - b);
    oddIndices.sort((a, b) => b - a);
    // using shift function
    for (let index in dp) {
      const checkEven = Number(index) % 2 === 0;
      checkEven
        ? (dp[index] = evenIndices.shift())
        : (dp[index] = oddIndices.shift());
    }
    return dp;
  };
  console.log(intuitive());
};

// odd indices = descending
// even indices = ascending
//console.log(sortEvenOdd([4, 1, 2, 3]));
