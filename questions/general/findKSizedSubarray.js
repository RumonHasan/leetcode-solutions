const findKSizedSubarray = (nums, k) => {
  let result = [];
  let counter = 1;
  for (let i = 1; i < k; i++) {
    const curr = nums[i];
    const prev = nums[i - 1];
    // add counter if
    if (prev + 1 === curr) {
      counter++;
    }
  }
  result.push(counter === k ? nums[k - 1] : -1); // initial counter for k size check;
  let end = k;
  let start = 0;
  while (end < nums.length) {
    if (nums[start] + 1 === nums[start + 1]) {
      counter--;
    }
    // checking for the right element when added
    if (nums[end] === nums[end - 1] + 1) {
      counter++;
    }

    if (counter === k) {
      result.push(nums[end]);
    } else {
      result.push(-1);
    }
    start++;
    end++;
  }
  return result;
};

// have to find k sized consequtive power of subarrays
console.log(findKSizedSubarray([1, 2, 3, 4, 3, 2, 5], 3));
