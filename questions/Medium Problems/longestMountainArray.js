const longestMountainArray = (arr) => {
  let endIndex = 0;
  let maxLength = 0;

  if (arr.every((value) => value === arr[0])) return 0;

  while (endIndex < arr.length) {
    if (arr[endIndex + 1] > arr[endIndex]) {
      let peak = false;
      let drop = false;
      let peakCount = 1;
      // check for peak
      while (endIndex < arr.length && arr[endIndex + 1] > arr[endIndex]) {
        peakCount++;
        endIndex++;
        peak = true;
      }
      // check for drop
      while (endIndex < arr.length && arr[endIndex + 1] < arr[endIndex]) {
        peakCount++;
        endIndex++;
        drop = true;
      }
      // if there is both peak and drop then it will show the peak or show zero value
      if (peak && drop) {
        maxLength = Math.max(maxLength, peakCount);
      }
    } else {
      endIndex++;
    }
  }
  return maxLength;
};

//console.log(longestMountainArray([2, 3]));
