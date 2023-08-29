const divideArray = (nums) => {
  let hash = {};
  for (let index in nums) {
    hash[nums[index]] ? hash[nums[index]]++ : (hash[nums[index]] = 1);
  }
  for (const [key, value] of Object.entries(hash)) {
    if (value % 2 === 1) {
      return false;
    }
  }
  return true;
};

//console.log(divideArray([3, 2, 3, 2, 2, 2]));
