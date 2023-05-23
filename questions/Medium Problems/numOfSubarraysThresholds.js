const numOfSubarrays = (arr, k, threshold) => {
  let endIndex = k;
  let startIndex = 0;
  let subCount = 0;
  let total = 0;

  for (let index = 0; index < k; index++) {
    total += arr[index];
  }
  if (total / k >= threshold) {
    subCount++;
  }
  while (endIndex < arr.length) {
    total -= arr[startIndex];
    total += arr[endIndex];
    const average = total / k;
    if (average >= threshold) {
      subCount++;
    }
    startIndex++;
    endIndex++;
  }

  return subCount;
};
// plan to first reduce the array into size of k then use the sliding window technique to calculate the average
//console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
