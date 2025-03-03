const pivotArray = (nums, pivot) => {
  let less = [];
  let more = [];
  let same = [];
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum < pivot) {
      less.push(currNum);
    } else if (currNum > pivot) {
      more.push(currNum);
    } else {
      same.push(currNum);
    }
  }
  same = same.slice(0, -1);
  return [...less, pivot, ...same, ...more];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
