const subarraySum = (nums, k) => {
  console.log(nums, k);
  // calculating the number of subarrays with the sum of k
  const hashmap = { 0: 1 };
  let count = 0,
    total = 0;
  for (const num of nums) {
    total += num;
    console.log(hashmap, count);
    if (hashmap[total - k]) count += hashmap[total - k];
    hashmap[total] ? hashmap[total]++ : (hashmap[total] = 1);
  }
  return count;
};

//console.log(subarraySum([1, 2, 3, 1, 2], 3));
