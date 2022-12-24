const deleteEarn = (nums) => {
  let sortedNums = nums.sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(sortedNums[i])) {
      map.set(sortedNums[i], map.get(sortedNums[i]) + 1);
    } else {
      map.set(sortedNums[i], 1);
    }
  }
  let newArray = [...map.keys()];
  let dp = new Array(newArray.length).fill(0);
  // main algorithm;
  for (let i = 0; i < newArray.length; i++) {
    let currentValue = newArray[i] * map.get(newArray[i]);
    // first and second index will have own sum
    if (i === 0) {
      dp[i] = currentValue;
    }
    if (i === 1) {
      if (newArray[i] - 1 === newArray[i - 1]) {
        dp[i] = Math.max(dp[i - 1], currentValue);
      } else {
        dp[i] = dp[i - 1] + currentValue;
      }
    }
    if (i > 1) {
      if (newArray[i] - 1 === newArray[i - 1]) {
        dp[i] = Math.max(dp[i - 2] + currentValue, dp[i - 1]);
      } else {
        dp[i] = dp[i - 1] + currentValue;
      }
    }
  }
  return dp[dp.length - 1];
};

//console.log(deleteEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]));

// note
// sort the array in ascending or descending order
// first take the object of the numbers and check their occurence
// make the dp
// start collecting the prefix sums without the ones that are adjacent to the left of it.
// calculate the sum and update dp and then return the largest sum from the ending of the array.
