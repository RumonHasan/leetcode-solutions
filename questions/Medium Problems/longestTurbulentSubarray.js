const longestTurbulentSubarray = (arr) => {
  const terribleApproach = () => {
    let end = 0;
    let start = 0;
    let maxLen = 0;
    let checkArray = [];
    // populating the true and false array
    for (let index = 1; index < arr.length; index++) {
      const current = arr[index];
      const prev = arr[index - 1];
      if (current === prev) {
        checkArray.push(Infinity);
        continue;
      }
      if (current > prev) {
        checkArray.push(true);
      } else {
        checkArray.push(false);
      }
    }
    console.log(checkArray);
    if (checkArray.every((check) => check === false)) {
      return 2;
    } else if (checkArray.every((check) => check === true)) {
      return 2;
    }
    let falseCounter = 0;
    let trueCounter = 0;
    while (end < checkArray.length) {
      const current = checkArray[end];
      // iteration check for when the values are equal to each other
      if (current === Infinity) {
        falseCounter = 0;
        trueCounter = 0;
        start = end;
      }
      if (!current) {
        falseCounter++;
        trueCounter = 0;
      } else {
        trueCounter++;
        falseCounter = 0;
      }

      if (falseCounter > 1 || trueCounter > 1) {
        falseCounter = 0;
        trueCounter = 0;
        start++;
      }
      maxLen = Math.max(maxLen, end - start + 1);
      console.log(
        falseCounter,
        trueCounter,
        'end:',
        end,
        'start',
        start,
        'maxLen',
        maxLen
      );
      end++;
    }
    return maxLen + 1;
  };

  const slidingWindowApproach = () => {
    if (arr.length === 1) return 1;
    let maxLen = 0;
    let end = 1;
    let start = 0;
    let bigCounter = 0;
    let smallerCounter = 0;
    // egde case
    let checkArray = [];
    for (let index = 1; index < arr.length; index++) {
      if (arr[index - 1] > arr[index]) {
        checkArray.push(false);
      } else if (arr[index - 1] < arr[index]) {
        checkArray.push(true);
      } else {
        checkArray = [];
        break;
      }
    }
    if (checkArray.length && checkArray.every((item) => item === true)) {
      return 2;
    } else if (
      checkArray.length &&
      checkArray.every((item) => item === false)
    ) {
      return 2;
    }
    while (end < arr.length) {
      const current = arr[end];
      const prev = arr[end - 1];

      if (current > prev) {
        bigCounter++;
        smallerCounter = 0;
      } else if (current < prev) {
        smallerCounter++;
        bigCounter = 0;
      } else if (current === prev) {
        start = end;
        bigCounter = 0;
        smallerCounter = 0;
      }

      if (bigCounter > 1 || smallerCounter > 1) {
        if (current < arr[end + 1] && current > prev) {
          start = end;
        } else if (current > arr[end + 1] && current < prev) {
          start = end;
        } else {
          start = end - 1;
        }
        bigCounter = 0;
        smallerCounter = 0;
      }
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
    }
    return maxLen;
  };

  console.log(slidingWindowApproach());
};

console.log(longestTurbulentSubarray([0, 8, 45, 88, 48, 68, 28, 55, 17, 24]));
