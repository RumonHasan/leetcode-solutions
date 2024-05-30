const equalSubstring = (s, t, maxCost) => {
  const slidingWindowBasicApproach = () => {
    let total = 0;
    let start = 0;
    let maxLen = 0;
    for (let i in s) {
      const sVal = s.charCodeAt(i);
      const tVal = t.charCodeAt(i);
      let difference = i < t.length ? Math.abs(tVal - sVal) : sVal;
      total += difference;
      // when the total exceeds budget
      while (total > maxCost) {
        total -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
        start++;
      }
      maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
  };
};

// using a nlogn solution
const specialArray = (nums) => {
  const bruteForceApproach = () => {
    nums.sort((a, b) => a - b);
  };

  const optimizedWay = () => {
    nums.sort((a, b) => a - b);
    let index = 0;
    let set = new Set();
    while (index < nums.length) {
      const currNum = nums[index];
      const remainingSlice = nums.length - index;
      if (currNum === remainingSlice && !set.has(currNum)) {
        return currNum;
      }
      set.add(currNum);
      // if its bigger then check back
      let prevNum = currNum - 1;
      while (
        prevNum >= remainingSlice &&
        prevNum >= (nums[index - 1] ? nums[index - 1] : 0)
      ) {
        if (prevNum === remainingSlice && !set.has(prevNum)) {
          return prevNum;
        }
        set.add(prevNum);
        prevNum -= 1;
      }
      index++;
    }
    return -1;
  };
};

//console.log(specialArray([2, 3, 0, 2]));
