const lengthOfShortestSubarray = (arr) => {
  // post fix length
  let postFixLength = 0;
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    const prev = arr[i - 1];
    if (curr < prev) {
      postFixLength = arr.length - i;
      break;
    }
  }
  // gettingt the prefix length
  let prefixLength = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    const next = arr[i + 1];
    const curr = arr[i];
    if (curr > next) {
      prefixLength = i + 1;
      break;
    }
  }
  // getting the middle length
  let middleFixLength = arr.length;
  let left = 0;
  let right = arr.length - 1;
  // shring valid window and increase invalid window
  while (left < right) {
    // reduce right side window if the left side remains smaller than right and the right should be a suffix
    while (
      left + 1 < right &&
      right < arr.length &&
      arr[right] >= arr[left] &&
      (right === arr.length - 1 || arr[right] <= arr[right + 1])
    ) {
      right--;
    }
    // expand window from the left .. if left side is bigger than right side then increase the right again
    while (right < arr.length && arr[left] > arr[right]) {
      right++;
    }
    if (right < arr.length && arr[left] <= arr[right]) {
      middleFixLength = Math.min(middleFixLength, right - left - 1);
    }
    // general increase
    left++;
  }

  return Math.min(prefixLength, postFixLength, middleFixLength);
};

// finding the postfix and prefix and middle approach and checking which is the smallest
console.log(lengthOfShortestSubarray([1, 2, 3, 10, 0, 7, 8, 9]));
