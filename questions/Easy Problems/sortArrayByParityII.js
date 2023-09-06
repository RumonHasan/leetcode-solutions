const sortArrayByParityII = (nums) => {
  const generalSolution = () => {
    let oddCollection = [];
    let evenCollection = [];
    for (let index = 0; index < nums.length; index++) {
      const number = nums[index];
      if (number % 2 === 1) {
        oddCollection.push(number);
      } else {
        evenCollection.push(number);
      }
    }
    let dp = new Array(nums.length).fill(0);
    let end = 0;
    let subIndex = 0;
    let subIndexTwo = 0;
    while (end < dp.length) {
      if (end % 2 === 0) {
        dp[end] = evenCollection[subIndex];
        subIndex++;
      } else {
        dp[end] = oddCollection[subIndexTwo];
        subIndexTwo++;
      }
      end++;
    }
    return dp;
  };
  // };
  // console.log(generalSolution());
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
