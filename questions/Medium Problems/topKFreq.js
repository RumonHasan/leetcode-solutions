const topKFreq = (nums, k) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let index in nums) {
      map.has(nums[index])
        ? map.set(nums[index], map.get(nums[index]) + 1)
        : map.set(nums[index], 1);
    }
    let freqArray = Array.from(map).sort((a, b) => b[1] - a[1]);
    let end = 0;
    let result = [];
    while (end < freqArray.length) {
      if (k === 0) break;
      result.push(freqArray[end][0]);
      k--;
      end++;
    }
    return result;
  };
};

//console.log(topKFreq([1, 1, 1, 2, 2, 3], 2));
