const getSubarrayBeauty = (nums, k, x) => {
  let stack = [];
  let end = k;
  let start = 0;
  let map = new Map();
  // neg check based on the given constraints
  const negCheck = (localMap, x) => {
    let negCheck = false;
    let rank = 0;
    for (let i = -50; i < 0; i++) {
      const negNum = i;
      if (localMap.has(negNum)) {
        const negVal = localMap.get(negNum);
        negCheck = true;
        rank += negVal;
        if (rank >= x) {
          return negNum;
        }
      }
    }
    return 0 && !negCheck;
  };
  // initial check
  for (let i = 0; i < end; i++) {
    const num = nums[i];
    if (num < 0) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }
  console.log(map);
  const negFirst = negCheck(map, x);

  stack.push(negFirst);

  // controlled map with the remaining array
  while (end < nums.length) {
    const startNum = nums[start];
    const curr = nums[end];
    if (map.has(startNum)) {
      map.set(startNum, map.get(startNum) - 1);
      if (map.get(startNum) === 0) {
        map.delete(startNum);
      }
    }
    start++;
    // adding possible new num
    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else if (curr < 0) {
      map.set(curr, 1);
    }
    const negX = negCheck(map, x);
    stack.push(negX);
    end++;
  }
  return stack;
};

// getting the xth smallest integer if they are negative in kth size subarray
console.log(getSubarrayBeauty([-14, 9, 13, -26, 47, -39, -49, -14, 29], 9, 4));
