const minSubsequence = (nums) => {
  const intuitiveBruteForceApproach = () => {
    let collection = [];
    let sortedNums = nums.sort((a, b) => b - a);
    let subTotal = 0;
    for (let index = 0; index < sortedNums.length; index++) {
      subTotal += sortedNums[index];
      let restTotal = sortedNums
        .slice(index + 1, sortedNums.length)
        .reduce((a, b) => a + b, 0);
      if (subTotal > restTotal) {
        collection.push(sortedNums.slice(0, index + 1));
        break;
      }
    }
    return collection[0];
  };
  //   console.log(intuitiveBruteForceApproach());
  // two pointers
  const optimizedSolution = () => {
    let sortedNums = nums.sort((a, b) => b - a);
    let left = 0;
    let right = sortedNums.length - 1;
    let rightTotal = 0;
    let leftTotal = 0;
    console.log(sortedNums);
    while (left <= right) {
      leftTotal += sortedNums[left];
      rightTotal += sortedNums[right];
      while (leftTotal > rightTotal) {
        right--;
        rightTotal += sortedNums[right];
      }
      left++;
    }
    console.log(leftTotal, rightTotal);
    let total = 0;
    for (let index = 0; index < sortedNums.length; index++) {
      total += sortedNums[index];
      if (total === leftTotal) {
        return sortedNums.slice(0, index + 1);
      }
    }
  };

  console.log(optimizedSolution());
};

// getting the subsequence that is bigger sum than rest of the other selected elements
console.log(minSubsequence([4, 4, 7, 6, 7]));
