const subsets = (nums) => {
  let result = [];
  let subset = [];
  const backtracking = (index) => {
    if (index >= nums.length) {
      result.push([...subset]);
      return;
    }
    // decision to include nums[i];
    subset.push(nums[index]);
    backtracking(index + 1);
    // decision to not include nums[1];
    subset.pop();
    backtracking(index + 1);
  };
  backtracking(0);
  return result;
};

// problem of utilizing recursive backtracking in order to acquire all the necessary subsets of the above array
// the subset must not include duplicate subsets that includes the same subset in a different order
// console.log(subsets([1, 2, 3]));
