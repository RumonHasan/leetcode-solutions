const numberOfWaysToSplit = (nums) => {
  const n = nums.length;
  // Build left prefix sum
  let leftPref = [BigInt(nums[0])];
  for (let i = 1; i < n; i++) {
    leftPref.push(leftPref[leftPref.length - 1] + BigInt(nums[i]));
  }
  // Build right prefix sum
  let rightPref = [BigInt(nums[n - 1])];
  for (let i = n - 2; i >= 0; i--) {
    rightPref.push(rightPref[rightPref.length - 1] + BigInt(nums[i]));
  }
  // main algo to check for valid splits
  rightPref.reverse(); // reduces run time significantly when reversed once instead of adding by  unshift
  let splitCounter = 0;
  for (let i = 0; i < n - 1; i++) {
    const prefLeft = leftPref[i];
    const prefRight = rightPref[i + 1];
    if (prefLeft >= prefRight) {
      splitCounter++;
    }
  }

  return splitCounter;
};

// approach: using the idea of general prefix left and right sums
// another easy way is to calculate total and subtract from the end of things
console.log(numberOfWaysToSplit([10, 4, -8, 7]));
