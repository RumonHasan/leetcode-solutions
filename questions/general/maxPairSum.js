const maxPairSum = (nums) => {
  let mapOne = new Map();
  let mapTwo = new Map();
  let maxPairSum = 0;

  // gets digit sum
  const getDigitSum = (num) => {
    return num
      .toString()
      .split('')
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);
  };

  for (let index = 0; index < nums.length; index++) {
    let num = nums[index];
    let currDigitSum = getDigitSum(num);
    let currMax = mapOne.get(currDigitSum) || 0;

    if (mapOne.has(currDigitSum)) {
      // if it has digit sum and its bigger than num
      if (num > currMax) {
        mapTwo.set(currDigitSum, currMax);
        mapOne.set(currDigitSum, num);

        maxPairSum = Math.max(maxPairSum, num + currMax);
      } else if (num > mapTwo.get(currDigitSum) || 0) {
        // if its bigger than second then update second
        mapTwo.set(currDigitSum, num);
        maxPairSum = Math.max(maxPairSum, num + currMax);
      }
    } else {
      mapOne.set(currDigitSum, num);
      mapTwo.set(currDigitSum, 0);
    }
  }

  return maxPairSum === 0 ? -1 : maxPairSum;
};

const alternativeWay = (nums) => {
  let map = new Map();
  let maxSum = 0;

  // getting digit sum
  const getDigitSum = (num) => {
    return num
      .toString()
      .split('')
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);
  };

  // getting the map for max and second max
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let digitSum = getDigitSum(currNum);
    let currMax = map.get(digitSum)?.[0] || 0;
    // if it has then check with max
    if (map.has(digitSum)) {
      if (currNum > currMax) {
        map.get(digitSum)[0] = currNum;
        map.get(digitSum)[1] = currMax;
        maxSum = Math.max(maxSum, currMax + currNum);
      } else if (currNum > (map.get(digitSum)[1] || 0)) {
        map.get(digitSum)[1] = currNum;
        maxSum = Math.max(maxSum, currMax + currNum);
      }
    } else {
      map.set(digitSum, [currNum, 0]); // second value is second max
    }
  }
  return maxSum === 0 ? -1 : maxSum;
};

// main logic is setting first max and updating the first map and if second is bigger only update then

console.log(maxPairSum([18, 43, 36, 13, 7]));
