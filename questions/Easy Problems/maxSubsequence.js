const maxSubsequence = (nums, k) => {
  const initialApproach = () => {
    let array = [];
    for (let index in nums) {
      const indexVal = Number(index);
      const num = nums[index];
      array.push([num, indexVal]);
    }
    let sortedArray = array.sort((a, b) => b[0] - a[0]);
    let checkArray = [];
    let counter = 0;
    for (let index = 0; index < sortedArray.length; index++) {
      if (counter === k) break;
      checkArray.push(sortedArray[index]);
      counter++;
    }
    let resort = checkArray.sort((a, b) => a[1] - b[1]);
    return resort.map((item) => item[0]);
  };

  // optimized approach
  const optimized = () => {
    let localArray = [];
    for (let index in nums) {
      const array = [nums[index], Number(index)];
      localArray = [...localArray, array];
    }
    return localArray
      .sort((a, b) => b[0] - a[0])
      .slice(0, k)
      .sort((a, b) => a[1] - b[1])
      .map((item) => item[0]);
  };
};
// sorting the arrays while maintainin their indices
// need the subsequenc with the max sum of the k elements
// console.log(maxSubsequence([-1, 3, -2, 4], 3));
