const validPartition = (nums) => {
  const bruteForceDFSApproach = (nums) => {
    const dfs = (index) => {
      // end point approach meaning all the cases have passed
      if (index === nums.length) {
        return true;
      }
      let check = false;
      // checking first pair
      if (index < nums.length - 1 && nums[index] === nums[index + 1]) {
        check = dfs(index + 2);
      }
      // checking second condition
      if (
        index < nums.length - 2 &&
        (nums[index] === nums[index + 1]) === nums[index + 2]
      ) {
        check = dfs(index + 3);
      }
      if (
        index < nums.length - 2 &&
        (nums[index] === nums[index + 1] - 1) === nums[index + 2] - 2
      ) {
        check = dfs(index + 3);
      }

      return check;
    };
    return dfs(0);
  };

  console.log(bruteForceDFSApproach(nums));
};

console.log(validPartition([4, 4, 4, 5, 6]));
