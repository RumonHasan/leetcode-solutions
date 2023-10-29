const findContiguousArray = (nums) => {
  console.log(nums);
  let map = new Map();
  let end = 0;
  let maxLength = 0;
  let start = 0;
  while (end < nums.length) {
    const num = nums[end];
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    const zeroCount = map.get(0);
    const oneCount = map.get(1);
    console.log(zeroCount, oneCount);
    if (zeroCount === oneCount) {
      maxLength = Math.max(maxLength, end - start + 1);
    }
    end++;
  }
  return maxLength;
};

console.log(findContiguousArray([0, 0, 0, 1, 1, 2, 1, 5, 6, 0]));
