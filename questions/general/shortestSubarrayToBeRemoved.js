const shortestSubarrayToBeRemoved = (arr) => {
  // prefix
  let right = arr.length - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }
  let prefRight = right;
  // suffix removal
  let left = 1;
  while (left < arr.length && arr[left - 1] < arr[left]) {
    left++;
  }
  let prefLeft = left;
  console.log(prefLeft, prefRight);

  // getting the middle portion
};

console.log(shortestSubarrayToBeRemoved([1, 2, 3, 10, 4, 2, 3, 5]));
