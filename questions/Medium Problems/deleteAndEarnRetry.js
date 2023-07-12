const deleteAndEarnRetry = (nums) => {
  let numHash = {};
  for (let index in nums) {
    let number = nums[index];
    numHash[number] ? numHash[number]++ : (numHash[number] = 1);
  }
  let array = Array.from(new Set([...nums])).sort((a, b) => a - b);
  let localDp = new Array(array.length).fill(0);
  // main iteration
  for (let index = 0; index < array.length; index++) {
    let num = array[index];
    let prevNum = array[index - 1];
    let totalNumValue = array[index] * numHash[num];
    if (index === 0) {
      localDp[index] = totalNumValue;
    }
    if (index === 1) {
      if (array[index] - 1 === prevNum) {
        localDp[index] = Math.max(localDp[index - 1], totalNumValue);
      } else {
        localDp[index] = localDp[index - 1] + totalNumValue;
      }
    }
    // main case where the comparison is checked based on whether the preceding value is num -1 or not
    if (index > 1) {
      if (array[index] - 1 === prevNum) {
        localDp[index] = Math.max(
          localDp[index - 2] + totalNumValue,
          localDp[index - 1]
        );
      } else {
        localDp[index] = localDp[index - 1] + totalNumValue;
      }
    }
  }
  return localDp[localDp.length - 1];
};
// new sorted array : [2,3,4]
// basic logic is to delete the numbers that are all similar to the current number
// have to use the concept of prefix sum in order to record the sum in an array
//console.log(deleteAndEarnRetry([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]));
