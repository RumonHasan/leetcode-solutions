const findArrayConcatVal = (nums) => {
  let end = nums.length - 1;
  let start = 0;
  let totalConcatVal = 0;
  while (start <= end) {
    let concatVal;
    if (nums.length % 2 === 1 && start === end) {
      concatVal = Number(nums[start].toString());
    } else {
      concatVal = Number(nums[start].toString() + nums[end].toString());
    }
    totalConcatVal += concatVal;
    start++;
    end--;
  }
  return totalConcatVal;
};

//console.log(findArrayConcatVal([5, 14, 13, 8, 12]));
