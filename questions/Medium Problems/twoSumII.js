const twoSum = (numbers, target) => {
  let hash = {};
  for (let index = 0; index < numbers.length; index++) {
    let tempDifference = target - numbers[index];
    if (!hash[tempDifference]) {
      hash[numbers[index]] = index + 1;
    } else {
      if (hash[tempDifference]) {
        return [hash[tempDifference], index + 1];
      }
    }
  }
};

//console.log(twoSum([2, 3, 4], 6));
