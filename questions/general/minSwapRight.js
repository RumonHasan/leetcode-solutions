const minSwapRight = (nums) => {
  let collection = [];
  let local = [nums[0]];

  const checkSort = (nums) => {
    const newArr = [...nums].reverse().flat();
    const existing = [...nums].flat().sort((a, b) => a - b);
    return newArr.join('') === existing.join('');
  };
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const prev = nums[i - 1];
    if (curr > prev) {
      local.push(curr);
    } else {
      collection.push(local);
      local = [curr];
    }

    if (i === nums.length - 1) {
      collection.push(local);
      local = [curr];
    }
  }
  if (collection.length === 1) return 0;
  if (collection.length > 2) return -1;

  const check = checkSort(collection);
  return check ? collection[collection.length - 1].length : -1;
};

// has to have only one pivot point
// alternate approach would be directly finding multiple pivot points and then checking
console.log(minSwapRight([27, 33, 42, 58, 81, 8, 9, 17]));
