const minOperations = (nums, x) => {
  let maxWindow = -Infinity;
  let end = 0;
  let start = 0;
  let currSum = 0;
  let target = nums.reduce((a, b) => a + b, 0) - x;
  while (end < nums.length) {
    currSum += nums[end];
    while (start <= end && currSum > target) {
      currSum -= nums[start];
      start++;
    }
    if (currSum === target) {
      maxWindow = Math.max(maxWindow, end - start + 1);
    }
    end++;
  }
  let minWindow = nums.length - maxWindow;
  return minWindow;
};

//console.log(minOperations([5, 2, 3, 1, 1], 5));

// swap has to happen
const buddyString = (s, goal) => {
  if (s.length !== goal.length) return false;
  let set = new Set(s);
  if (s === goal) {
    // if its equal need duplicates to swap then true
    return set.size < s.length;
  }
  // main case
  let stack = [];
  let map = new Map();
  let gMap = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    gMap.set(goal[i], (gMap.get(goal[i]) || 0) + 1);
    if (s[i] !== goal[i]) {
      stack.push(s[i]);
    }
  }
  for (let [key, value] of map) {
    if ((gMap.has(key) && gMap.get(key) !== value) || !gMap.has(key)) {
      return false;
    }
  }
  return stack.length === 2;
};

//console.log(buddyString('ab', 'ba'));
