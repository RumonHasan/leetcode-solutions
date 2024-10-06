const rangeSum = (nums, n, left, right) => {
  const MOD = 1000000007; // 10^9 + 7 // adjustment for having over 500,000 elements
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = (currentSum + nums[j]) % MOD;
      array.push(currentSum);
    }
  }
  array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum = (sum + array[i - 1]) % MOD;
  }
  return sum;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
