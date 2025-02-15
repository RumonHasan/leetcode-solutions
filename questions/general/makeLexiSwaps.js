const makeLexicographicalSwaps = (nums, limit) => {
  let groups = [];
  let localGroup = [];
  let sortedNums = nums.toSorted((a, b) => a - b);
  let groupIndex = 0;
  let map = new Map();
  let result = new Array(nums.length).fill(0);

  for (let i = 0; i < sortedNums.length; i++) {
    const currNum = sortedNums[i];
    if (localGroup.length === 0) {
      localGroup.push(currNum);
      map.set(currNum, groupIndex);
    } else if (Math.abs(localGroup[localGroup.length - 1] - currNum) <= limit) {
      localGroup.push(currNum);
      map.set(currNum, groupIndex);
    } else {
      groups.push(localGroup);
      localGroup = [currNum];
      groupIndex++;
      map.set(currNum, groupIndex);
    }
    if (i === sortedNums.length - 1) {
      groups.push(localGroup);
      localGroup = [];
    }
  }
  const commonLen = sortedNums.length;
  for (let i = 0; i < commonLen; i++) {
    const currNum = nums[i];
    const currExtractedValue = groups[map.get(currNum)].shift();
    result[i] = currExtractedValue;
  }

  return result;
};

console.log(makeLexicographicalSwaps([1, 7, 6, 18, 2, 1], 3));
