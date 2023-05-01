const findSubarrays = (nums) => {
  let collection = [];
  let sum = nums[0] + nums[1];
  collection.push(sum);
  let endIndex = 2;
  let startIndex = 0;
  while (endIndex < nums.length) {
    sum -= nums[startIndex];
    startIndex++;
    sum += nums[endIndex];
    collection.push(sum);
    endIndex++;
  }
  let hash = [];
  for (let index in collection) {
    hash[collection[index]]
      ? hash[collection[index]]++
      : (hash[collection[index]] = 1);
  }
  for (let [_, val] of Object.entries(hash)) {
    if (val > 1) {
      return true;
    }
  }
  return false;
};

//console.log(findSubarrays([4, 2, 4]));
