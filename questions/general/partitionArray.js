const partitionArray = (nums, k) => {
  nums.sort((a, b) => a - b);
  let count = 1;
  let end = 1;
  let start = 0;
  let flag = true;
  while (end < nums.length) {
    if (nums[end] - nums[start] > k) {
      flag = false;
      start = end;
    }
    if (!flag) {
      count++;
    }
    flag = true;
    end++;
  }
  return count;
};
//[1,2,3,5,6, 7]-> ans -> 2
//console.log(partitionArray([3, 6, 1, 2, 5, 7], 2));
