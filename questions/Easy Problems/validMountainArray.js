const validMountainArray = (arr) => {
  let end = 0;
  let counter = 0;
  // bad way to get rid of edge case for all ascending order
  if (arr.every((val, index) => index === 0 || val >= arr[index - 1])) {
    return false;
  }
  while (end < arr.length) {
    if (arr[end + 1] > arr[end]) {
      // rise
      let peak = false;
      while (end < arr.length && arr[end + 1] > arr[end]) {
        end++;
        counter++;
      }
      // drop
      while (end < arr.length && arr[end + 1] < arr[end]) {
        end++;
        counter++;
      }
      if (counter !== arr.length - 1) {
        return false;
      }
    } else {
      end++;
    }
  }
  return counter !== 0;
};

//console.log(validMountainArray([2, 0, 2]));
