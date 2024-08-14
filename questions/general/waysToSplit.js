const threePointerSlidingWindow = (nums, k) => {
  const oddCheck = (num) => num % 2 === 1;
  let left = 0;
  let mid = 0;
  let end = 0;
  let count = 0;
  let oddCounter = 0;
  while (end < nums.length) {
    const currNum = nums[end];
    if (oddCheck(currNum)) {
      oddCounter++;
    }
    // when oddCount exceeds k
    while (oddCounter > k) {
      if (oddCheck(nums[left])) {
        oddCounter--;
      }
      left++;
      // updating mid to keep track
      mid = left;
    }
    // updating the mid and calculating the length
    if (oddCounter === k) {
      while (mid < nums.length) {
        if (oddCheck(nums[mid])) {
          break;
        }
        mid++;
      }
      count += mid - left + 1;
    }
    end++;
  }
  return count;
};

console.log(threePointerSlidingWindow([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
