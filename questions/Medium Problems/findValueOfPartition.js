const findValueOfPartition = (nums) => {
  const intuitiveApproach = () => {
    nums.sort((a, b) => a - b);
    let end = 1;
    let minNum = Infinity;
    while (end < nums.length) {
      const currentElement = nums[end];
      const previousElement = nums[end - 1];
      minNum = Math.min(Math.abs(currentElement - previousElement), minNum);
      end++;
    }
    return minNum;
  };
};
// getting the adjacent differences
//console.log(findValueOfPartition([100, 1, 10, 50, 25]));
