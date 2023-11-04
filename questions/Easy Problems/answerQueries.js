const answerQueries = (nums, queries) => {
  const intuitiveApproach = () => {
    nums.sort((a, b) => a - b);
    let collection = [];
    for (let index = 0; index < queries.length; index++) {
      let query = queries[index];
      let prefixSum = 0;
      let counter = 0;
      for (let subIndex = 0; subIndex < nums.length; subIndex++) {
        if (prefixSum + nums[subIndex] <= query) {
          prefixSum += nums[subIndex];
          counter++;
        }
      }
      collection.push(counter);
    }
    return collection;
  };
};
// I do not know what I did but it works
//console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
