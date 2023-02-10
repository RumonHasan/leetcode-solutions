const numOfSubarrays = (arr, k, threshold) => {
  // optimized
  let end = 0;
  let start = 0;

  // initial k
  let count = 0;
  let sum = 0;
  while (end < k) {
    sum += arr[end];
    end++;
  }
  let average = sum / k;
  if (average >= threshold) count++;
  while (end < arr.length) {
    sum -= arr[start];
    start++;
    sum += arr[end];
    average = sum / k;
    if (average >= threshold) {
      count++;
    }
    end++;
  }
  return count;
};

// console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));

//   const exceeded = () => {

//   let end = 0;
//   let start = 0;
//   let average = 0;
//   let count = 0;
//   let firstSlice = arr.slice(0, k).reduce((a, b) => a + b) / k;
//   average = firstSlice;
//   if (average >= threshold) count++;
//   end = k;
//   start = 1;
//   console.log(sum);
//   while (end < arr.length) {
//     let slice = arr.slice(start, end + 1);
//     let sum = 0;
//     for (let i = 0; i < slice.length; i++) {
//       sum += slice[i];
//     }
//     if (sum / k >= threshold) {
//       count++;
//     }
//     end++;
//     start++;
//   }
//   return count;
//   };

// optimized
