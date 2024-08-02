const maxOverlap = (nums, firstLen, secondLen) => {
  let endFirst = firstLen;
  let startFirst = 0;
  let firstTotal = 0;

  let finalMax = 0;
  for (let i = 0; i < firstLen; i++) {
    firstTotal += nums[i];
  }
  let firstMax = firstTotal;
  for (let i = endFirst; i < nums.length - firstLen; i++) {
    firstTotal -= nums[startFirst];
    firstTotal += nums[i];
    firstMax = Math.max(firstMax, firstTotal);
    startFirst++;
    // second check for sliding window length
    let secondStart = i;
    let secondMax = 0;
    let secondTotal = 0;
    for (let j = i; j < secondStart + secondLen; j++) {
      secondTotal += nums[j];
    }
    console.log(secondTotal, 'second');
    secondMax = secondTotal;

    let secondEnd = i + secondLen;
    while (secondEnd < nums.length) {
      secondTotal -= nums[secondStart];
      secondTotal += nums[secondEnd];
      secondMax = Math.max(secondMax, secondTotal);
      secondStart++;
      secondEnd++;
    }
    finalMax = Math.max(finalMax, secondMax + firstMax);
  }
  return finalMax;
};

// one approach can be to start with one then slide the other
console.log(maxOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
