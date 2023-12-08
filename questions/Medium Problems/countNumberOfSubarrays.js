const numberOfSubarrays = (nums, k) => {
  nums = nums.map((num) => (num % 2 === 0 ? 0 : 1));
  let end = 0;
  let start = 0;
  let count = 0;
  let total = 0;
  let localOddCount = 0;
  const checkOddEven = (num) => num % 2 === 1;
  while (end < nums.length) {
    if (checkOddEven(nums[end])) {
      count = 0;
      localOddCount++;
    }
    // only enters when local count === k and then it starts increasing count
    // otherwise count stays stable untill another odd is found then its reinitialised
    while (localOddCount === k) {
      count++;
      if (checkOddEven(nums[start])) {
        localOddCount--;
      }
      start++;
    }
    // after the count hits five it gets stored as prefix sum and no more count will be changed
    total += count;
    end++;
  }
  return total;
};

// count number of good subarrays of atleast length k and has k odd numbers in it
console.log(numberOfSubarrays([1, 1, 2, 1, 0], 3));
