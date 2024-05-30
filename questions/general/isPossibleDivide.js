const isPossibleDivide = (nums, k) => {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let end = 0;
  let stack = [];
  nums.sort((a, b) => a - b);
  while (end < nums.length) {
    // only goes in if there is a number in map
    if (map.has(nums[end])) {
      let localNum = nums[end];
      let localStack = [];
      while (map.has(localNum)) {
        localStack.push(localNum);
        map.set(localNum, map.get(localNum) - 1);
        if (map.get(localNum) === 0) {
          map.delete(localNum);
        }
        // stack injection if there is k count
        if (localStack.length === k) {
          stack.push(localStack);
          break;
        }

        localNum++;
      }
    }
    end++;
  }
  let stackLen = stack.reduce((acc, curr) => acc + curr.length, 0);
  return stackLen === nums.length;
};

//console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
