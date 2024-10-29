const subTwo = (nums) => {
  let runSum = nums[0] + nums[1];
  let set = new Set();
  set.add(runSum);
  let end = 2;
  let start = 0;
  while (end < nums.length) {
    runSum -= nums[start];
    runSum += nums[end];
    if (set.has(runSum)) return true;
    set.add(runSum);
    start++;
    end++;
  }
  return false;
};

console.log(subTwo([1, 2, 3, 4, 5]));
