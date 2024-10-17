const maxSwap = (num) => {
  let nums = String(num).split('');
  let prefSum = new Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    const currNum = nums[i];
    if (i === nums.length - 1) {
      prefSum[i] = currNum;
    } else {
      prefSum[i] = prefSum[i + 1] < currNum ? currNum : prefSum[i + 1];
    }
  }
  // getting the first max from the back;
  let replaced;
  let currPref;
  for (let i = 0; i < nums.length; i++) {
    if (prefSum[i] > nums[i]) {
      replaced = nums[i];
      nums[i] = prefSum[i];
      currPref = prefSum[i];
      break;
    }
  }
  // replaced the closest similar pref from the end
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == currPref) {
      nums[i] = replaced;
      break;
    }
  }

  return parseInt(nums.join(''));
};
// using prefix sum
console.log(maxSwap('9973'));
