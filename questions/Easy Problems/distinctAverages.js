const distinctAverages = (nums) => {
  let averageMap = new Map();
  let sortedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  while (left <= right) {
    const average = (sortedNums[left] + sortedNums[right]) / 2;
    if (averageMap.has(average)) {
      averageMap.set(average, averageMap.set(average) + 1);
    } else {
      averageMap.set(average, 1);
    }
    left++;
    right--;
  }
  return averageMap.size;
};

// sorting is the basic approach to get the pairs of  min and max and getting their averages
//console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
