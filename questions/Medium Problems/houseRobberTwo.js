const robTwo = (nums) => {
  const chunkOne = nums.slice(0, nums.length - 1);
  const chunkTwo = nums.slice(1, nums.length);
  if (nums.length === 1) {
    return nums[0];
  }
  // getting the maximum profit margin by creating a dp based solution for the different chunks of the array
  const maxProfitFromRobbery = (chunk) => {
    let robberDp = new Array(chunk.length).fill(0);
    for (let index = 0; index < chunk.length; index++) {
      if (index === 0) {
        robberDp[index] = chunk[index];
      }
      if (index === 1) {
        let maxProfit = Math.max(robberDp[index - 1], chunk[index]);
        robberDp[index] = maxProfit;
      }
      if (index > 1) {
        robberDp[index] = Math.max(
          chunk[index] + robberDp[index - 2],
          robberDp[index - 1]
        );
      }
    }
    return robberDp;
  };
  let chunkOneSum = maxProfitFromRobbery(chunkOne);
  let chunkTwoSum = maxProfitFromRobbery(chunkTwo);
  return Math.max(
    chunkOneSum[chunkOneSum.length - 1],
    chunkTwoSum[chunkTwoSum.length - 1]
  );
};
// 1d dynamic problem
// console.log(robTwo([1]));
