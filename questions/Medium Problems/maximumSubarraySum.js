const maximumSubarraySum = (nums, k) => {
  let map = new Map();
  let totalLength = 0;
  for (let index = 0; index < k; index++) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + 1);
    } else {
      map.set(nums[index], 1);
    }
    totalLength += nums[index];
  }
  let collection = [];
  let valuesCheck = [...map.values()].some((val) => val > 1);
  if (valuesCheck && k === nums.length) return 0;
  if (!valuesCheck) {
    collection.push(totalLength);
  }

  // second portion with the sliding technique;
  let endIndex = k;
  let startIndex = 0;
  while (endIndex < nums.length) {
    totalLength -= nums[startIndex];
    // reduction of the first number by default to reduce the sliding window
    map.set(nums[startIndex], map.get(nums[startIndex]) - 1);
    if (map.get(nums[startIndex]) === 0) {
      map.delete(nums[startIndex]);
    }
    if (map.has(nums[endIndex])) {
      map.set(nums[endIndex], map.get(nums[endIndex]) + 1);
    } else {
      map.set(nums[endIndex], 1);
    }
    totalLength += nums[endIndex];
    // nested checking condition;
    if (map.get(nums[endIndex]) === 1) {
      collection.push(totalLength);
    }
    startIndex++;
    endIndex++;
  }
  return Math.max(...collection);
};

// have to reduce from the start index number if the numebr at teh end is in the map and has a value of over 1
//console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3));
