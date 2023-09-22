const findErrorNums = (nums) => {
  const horribleCode = () => {
    let hash = {};
    for (let index in nums) {
      if (hash[nums[index]]) {
        hash[nums[index]]++;
      } else {
        hash[nums[index]] = 1;
      }
    }
    let collection = [];
    for (let [key, value] of Object.entries(hash)) {
      if (value > 1) {
        collection.push(Number(key));
        break;
      }
    }
    let dp = new Array(nums.length).fill(0);
    for (let index in dp) {
      dp[index] = Number(index) + 1;
    }
    for (let index in dp) {
      if (!nums.includes(dp[index])) {
        collection.push(dp[index]);
      }
    }
    return collection;
  };
};

// return duplicated and missing num
//console.log(findErrorNums([1, 1]));
