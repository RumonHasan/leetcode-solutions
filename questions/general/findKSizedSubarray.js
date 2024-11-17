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
  result.push(counter === k ? nums[k - 1] : -1); // if counter is k then add the last element;
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
//console.log(findKSizedSubarray([1, 2, 3, 4, 3, 2, 5], 3));

// checking for max unique subarray sum
const maxSubarraySum = (nums, k) => {
  let map = new Map();
  let currTotal = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    currTotal += num;
  }
  if (map.size === k) {
    max = currTotal;
  }
  for (let i = k; i < nums.length; i++) {
    const curr = nums[i];
    const start = nums[i - k];
    if (map.has(start)) {
      map.set(start, map.get(start) - 1);
      if (map.get(start) === 0) {
        map.delete(start);
      }
    }
    map.set(curr, (map.get(curr) || 0) + 1);
    currTotal -= start;
    currTotal += curr;
    if (map.size === k) {
      max = Math.max(max, currTotal);
    }
  }

  return max;
};

console.log(maxSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
