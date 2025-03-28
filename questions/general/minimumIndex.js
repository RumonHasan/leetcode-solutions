const minimumIndex = (nums) => {
  let dominantEl = 0;
  let domValue = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let [key, value] of map) {
    if (domValue < value) {
      domValue = value;
      dominantEl = Number(key);
    }
  }
  if (domValue < nums.length / 2) {
    return -1;
  }

  let prefRight = new Array(nums.length).fill(0);
  let prefLeft = new Array(nums.length).fill(0);
  // pref array construction

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      prefRight[i] = nums[i] === dominantEl ? 1 : 0;
    } else {
      prefRight[i] =
        nums[i] === dominantEl ? prefRight[i + 1] + 1 : prefRight[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefLeft[i] = nums[i] === dominantEl ? 1 : 0;
    } else {
      prefLeft[i] =
        nums[i] === dominantEl ? prefLeft[i - 1] + 1 : prefLeft[i - 1];
    }
  }
  let lenCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    lenCounter++;
    if (currNum === dominantEl) {
      const lenLeft = lenCounter;
      const lenRight = nums.length - lenLeft;

      const prefRightVal = prefRight[i + 1];
      const prefLeftVal = prefLeft[i];

      if (prefLeftVal > lenLeft / 2 && prefRightVal > lenRight / 2) {
        return i;
      }
    }
  }

  return -1;
};

console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2]));
