const longestSubNoRepeat = (s) => {
  let map = new Map(); // to keep count of the chars
  let maxLen = 0;
  let end = 0;
  let start = 0;
  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    while (map.get(s[end]) > 1) {
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);
        if (map.get(s[start]) === 0) {
          map.delete(s[start]);
        }
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

// console.log(longestSubNoRepeat('pwwkew'));

// getting the max sum from two non overlapping subarrays
const maxTwoSumNonOverlap = (nums, firstLen, secondLen) => {
  console.log(nums);

  const secondAttempt = () => {
    const remainSum = (array, len, mainMax) => {
      let total = 0;
      let max = 0;
      for (let i = 0; i < len; i++) {
        total += array[i];
      }
      max = total;
      let end = len;
      let start = 0;
      while (end < array.length) {
        total += array[end];
        total -= array[start];
        max = Math.max(total, max);
        start++;
        end++;
        console.log(max);
      }
      let localFinal = 0;
      localFinal = mainMax + max;
      return localFinal;
    };

    let max = 0;
    let total = 0;
    for (let i = 0; i < firstLen; i++) {
      total += nums[i];
    }
    max = total;
    let end = firstLen;
    let final = remainSum(nums.slice(end, nums.length), secondLen, max);
    let start = 0;
    while (end < nums.length) {
      total -= nums[start];
      total += nums[end];
      max = Math.max(max, total);

      if (nums.length - end >= secondLen) {
        let subSlice = nums.slice(end, nums.length);
        final = Math.max(final, remainSum(subSlice, secondLen, max));
        console.log(subSlice);
      }
      end++;
      start++;
    }
    return final;
  };
};

//console.log(maxTwoSumNonOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));

const partitionIntoThreeEqualParts = (arr) => {
  let total = arr.reduce((acc, curr) => acc + curr, 0);
  let singlePartition = total / 3;
  let partitionCount = 0;
  let partitionTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    const currEl = arr[i];
    partitionTotal += currEl;
    if (partitionTotal === singlePartition) {
      partitionCount++;
      partitionTotal = 0;
    }
  }
  console.log(partitionCount);
  return partitionCount === 3 || partitionCount > 3;
};

//console.log(partitionIntoThreeEqualParts([0, 0, 0, 0]));
