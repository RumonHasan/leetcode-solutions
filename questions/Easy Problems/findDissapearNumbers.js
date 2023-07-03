const findDissapearNumbers = (nums) => {
  const hashApproach = () => {
    let hash = {};
    for (let index = 0; index < nums.length; index++) {
      hash[nums[index]] = true;
    }
    let collection = [];
    for (let index = 1; index <= nums.length; index++) {
      if (!hash[index]) {
        collection.push(index);
      }
    }
    return collection;
  };
};

//console.log(findDissapearNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
