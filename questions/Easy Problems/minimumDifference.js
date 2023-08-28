const minimumDifference = (nums, k) => {
  const slidingWindowSortedApproach = () => {
    let sortedNums = nums.sort((a, b) => b - a);
    let initialArray = nums.slice(0, k);
    let minDifference = Math.max(...initialArray) - Math.min(...initialArray);
    let end = k;
    while (end < sortedNums.length) {
      initialArray.shift();
      initialArray.push(sortedNums[end]);
      const difference =
        initialArray[0] - initialArray[initialArray.length - 1];
      minDifference = Math.min(difference, minDifference);
      end++;
    }
    return minDifference;
  };

  //console.log(slidingWindowSortedApproach());
};

//console.log(minimumDifference([9, 4, 1, 7], 2));
