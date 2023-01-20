const removeDuplicateFunction = (nums) => {
  let nonDuplicateCount = 0;
  let hash = {};
  const underscore = '_';
  for (let index in nums) {
    hash[nums[index]] ? hash[nums[index]]++ : (hash[nums[index]] = 1);
  }
  for (let [key, value] of Object.entries(hash)) {
    if (value > 2) {
      nonDuplicateCount += 2;
      hash[key] = 2;
    } else {
      nonDuplicateCount += value;
    }
  }
  // reconstructing numbers
  let keys = Object.keys(hash).sort((a, b) => a - b);

  let newArray = [];
  // new array
  for (let index in keys) {
    if (hash[keys[index]]) {
      for (let i = 0; i < hash[keys[index]]; i++) {
        newArray.push(Number(keys[index]));
      }
    }
  }
  // remodifying nums
  for (let index in nums) {
    nums[index] = newArray[index];
    if (newArray[index] === undefined) {
      nums[index] = underscore;
    }
  }
  return nonDuplicateCount;
};

// note: have to return the num length after the duplcaites are removed
//console.log(removeDuplicateFunction([-1, 0, 0, 0, 0, 3, 3]));
