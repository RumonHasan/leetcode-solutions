const makeEqual = (words) => {
  const intutiveApproach = () => {
    let map = new Map();
    if (words.length === 1) return true;
    const strLen = words.length;
    const getFrequency = (string, localMap = map) => {
      for (let char of string) {
        localMap.set(char, (localMap.get(char) || 0) + 1);
      }
      return localMap;
    };
    for (let string of words) {
      getFrequency(string);
    }
    for (let [key, value] of map) {
      if (value % strLen > 0) {
        return false;
      }
    }
    return true;
  };
};

// console.log(
//   makeEqual([
//     'caaaaa',
//     'aaaaaaaaa',
//     'a',
//     'bbb',
//     'bbbbbbbbb',
//     'bbb',
//     'cc',
//     'cccccccccccc',
//     'ccccccc',
//     'ccccccc',
//     'cc',
//     'cccc',
//     'c',
//     'cccccccc',
//     'c',
//   ])
// );

const findMaxOnes = (nums) => {
  let maxCount = 0;
  let end = 0;
  while (end < nums.length) {
    const currNum = nums[end];
    if (currNum === 1) {
      let start = 0;
      while (end < nums.length && nums[end] === 1) {
        start++;
        end++;
      }
      maxCount = Math.max(maxCount, start);
    }
    end++;
  }
  return maxCount;
};

//console.log(findMaxOnes([1, 1, 0, 1, 1, 1]));

const longestOnes = (nums, k) => {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let extraCount = 0;
  while (end < nums.length) {
    if (nums[end] === 0) extraCount++;
    while (extraCount > k) {
      if (nums[start] === 0) {
        extraCount--;
      }
      start++;
    }
    maxLength = Math.max(end - start + 1, maxLength);
    end++;
  }
  return maxLength;
};

//console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
