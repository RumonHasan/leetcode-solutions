const minSumOfLengths = (arr, target) => {
  let startIndex = 0;
  let endIndex = 0;
  let localSum = 0;
  let collection = [];
  while (endIndex < arr.length) {
    localSum += arr[endIndex];

    // slides and reduces the sum till it meets target
    while (localSum > target) {
      localSum -= arr[startIndex];
      startIndex++;
    }
    // checks for equality
    if (localSum === target) {
      const slice = arr.slice(startIndex, endIndex + 1);
      collection.push(slice);
    }
    endIndex++;
  }
  console.log(collection);
  for (let index = 1; index < collection.length; index++) {
    if (collection[index][0] === collection[index - 1][1]) {
      collection.splice(index, 1);
    }
  }

  if (collection.length === 1 || collection.length === 0) {
    return -1;
  }
  if (collection.length) {
    return collection[0].length + collection[1].length;
  } else {
    return -1;
  }
};
// sliding window approach
// note of the prompt
// finding the min length of the subarray with with the target value of sum
// have to find two overlapping subarrays of sum is equal to target
console.log(minSumOfLengths([1, 1, 1, 2, 2, 2, 4, 4], 6));
