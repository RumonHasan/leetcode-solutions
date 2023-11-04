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

const smallerNumbers = (nums) => {
  let map = new Map();
  let copy = [...nums];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) continue;
    map.set(nums[index], index);
  }
  let end = 0;
  let result = [];
  while (end < copy.length) {
    const number = copy[end];
    result.push(map.get(number));
    end++;
  }
  return result;
};

//console.log(smallerNumbers([8, 1, 2, 2, 3]));
