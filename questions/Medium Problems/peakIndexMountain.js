const peakIndexInMountainArry = (arr) => {
  let endIndex = 0;
  while (endIndex < arr.length) {
    if (arr[endIndex] < arr[endIndex + 1]) {
      while (endIndex < arr.length && arr[endIndex] < arr[endIndex + 1]) {
        endIndex++;
      }
      return endIndex;
    } else {
      endIndex++;
    }
  }
};

// using one pass algorithm
//console.log(peakIndexInMountainArry([0, 10, 5, 2]));
