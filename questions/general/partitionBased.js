const paritionBasedProblem = (s) => {
  let map = new Map();
  let end = 0;
  let range = [];
  let localString = '';
  while (end < s.length) {
    console.log(localString);
    if (map.get(s[end])) {
      range.push(localString);
      localString = '';
      map.clear();
    }
    localString += s[end];
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    if (end === s.length - 1) {
      range.push(localString);
    }
    end++;
  }
  console.log(range);

  return range.length;
};

//console.log(paritionBasedProblem('abacaba'));

const findPeak = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let currNum = nums[i];
    let nextNum = nums[i + 1];
    if (nextNum > currNum) {
      let checkOne = false;
      let checkTwo = false;
      while (i < nums.length && nums[i] < nums[i + 1]) {
        checkOne = true;
        i++;
      }
      if (i === nums.length - 1) {
        return i;
      }
      while (i < nums.length && nums[i] > nums[i + 1]) {
        checkTwo = true;
        if (checkOne && checkTwo) return i;
        i++;
      }
    }
    i++;
  }
  return 0;
};

console.log(findPeak([1, 2]));
