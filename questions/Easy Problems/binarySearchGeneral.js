const generalBinarySearchProblem = (nums, target) => {
  const checkNum = nums.some((num) => num === target);
  if (!checkNum) return -1;
  let end = nums.length - 1;
  let start = 0;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (nums[Math.floor((end + start) / 2)] === target) {
      return Math.floor((end + start) / 2);
    }
    if (nums[mid] < target) start = mid + 1;
    if (nums[mid] > target) end = mid - 1;
  }
};
