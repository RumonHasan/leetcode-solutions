const topKFrequent = (nums, k) => {
  let map = new Map();
  for (let index in nums) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + 1);
    } else {
      map.set(nums[index], 1);
    }
  }
  let sortedMap = [];
  for (let [key, value] of map) {
    sortedMap.push([Number(key), value]);
  }
  sortedMap.sort((a, b) => b[1] - a[1]);
  let result = [];
  let counter = 0;
  for (let index in sortedMap) {
    if (counter === k) break;
    result.push(sortedMap[index][0]);
    counter++;
  }
  return result;
};

//console.log(topKFrequent([3, 0, 1, 0], 1));
