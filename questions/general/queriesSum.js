const sumEvenAfterQueries = (nums, queries) => {
  let sum = nums
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  let result = new Array(nums.length).fill(0);
  // main iteration to check
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i][1];
    const value = queries[i][0];
    const localSum = value + nums[index];

    if (localSum % 2 === 0) {
      if (nums[index] % 2 !== 0) {
        sum += localSum;
      } else {
        sum += value;
      }
    } else if (localSum % 2 !== 0) {
      if (nums[index] % 2 === 0) {
        sum -= nums[index];
      }
    }
    // updating the result and updating the number array
    result[i] = sum;
    nums[index] = localSum;
  }
  return result;
};

console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);
