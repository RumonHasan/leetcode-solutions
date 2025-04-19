const countGoodSubarrays = (nums, k) => {
  // initial variables
  let map = new Map();
  let end = 0;
  let start = 0;
  let count = 0;
  let pairCount = 0;

  // getting the pair count and logic set
  while (end < nums.length) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1); // increasing the occurence of nums
    // increasing pair count if the occurence fits the condition
    if (map.get(nums[end]) > 1) {
      pairCount += map.get(nums[end]) - 1; // adding pairs
    }

    // checking from while loop and checking sliding window mechanism to count the number of subarrays
    while (start < nums.length && pairCount >= k) {
      count += nums.length - end; // counts the number of pairs by checkin from the end since nums from end to n will be included
      // reduction condition
      if (map.has(nums[start])) {
        // logic to reduce the nums from the start and also reduce the pair count
        map.set(nums[start], map.get(nums[start]) - 1);
        pairCount -= map.get(nums[start]); // reducing n - 1 pairs
        // delete element from map if its hits 0
        if (map.get(nums[start]) === 0) {
          map.delete(nums[start]);
        }
      }

      start++;
    }
    end++;
  }

  return count; // will return the final count of the pairs
};

// the result needs to have k pairs of numbers count and it should be atleast k times or more than k
console.log(countGoodSubarrays([3, 1, 4, 3, 2, 2, 4], 2));
