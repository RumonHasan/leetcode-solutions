const countNumberOfNiceSubarrays = (nums, k) => {
  // three pointer approach
  let end = 0;
  let left = 0;
  let middle = 0;
  let oddCount = 0;
  let totalSubCount = 0;
  // initial variables to control the pointer sections
  const oddCheck = (num) => num % 2 === 1;
  while (end < nums.length) {
    if (oddCheck(nums[end])) {
      oddCount++;
    }
    // when end number is odd and it exceeds odd check
    while (oddCount > k) {
      if (oddCheck(nums[left])) {
        oddCount--;
      }
      left++;
      middle = left; // keeping the middle updated to the left
    }

    // switch the middle point to the first one to get additional windows
    if (oddCount === k) {
      // middle tracks to the first one to count the additional subarrays basically
      while (middle < nums.length) {
        if (oddCheck(nums[middle])) {
          break;
        }
        middle++;
      }
      totalSubCount += middle - left + 1;
    }
    end++;
  }
  return totalSubCount;
};

//console.log(countNumberOfNiceSubarrays([1, 1, 2, 1, 1], 3));

// number of distinct subarrays equal to the whole arrays .. using three pointer approach
const countCompleteSubarrays = (nums) => {
  let map = new Map();
  let setSize = new Set([...nums]).length;
  let end = 0;
  let start = 0;
  let subCount = 0;
  console.log(setSize);
  while (end < nums.length) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    while ([...map.keys()].length === setSize) {
      console.log(map);
      subCount += nums.length - end;
      map.set(nums[start], map.get(nums[start]) - 1);
      if (map.get(nums[start]) === 0) {
        map.delete(nums[start]);
      }
      start++;
    }
    end++;
  }
  return subCount;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
