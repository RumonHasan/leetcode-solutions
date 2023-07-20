const findTheDistanceValue = (arr1, arr2, d) => {
  let count = 0;
  for (let index = 0; index < arr1.length; index++) {
    let sum = 0;
    for (let secondIndex = 0; secondIndex < arr2.length; secondIndex++) {
      const valueCheck = Math.abs(arr1[index] - arr2[secondIndex]) <= d;
      if (valueCheck) {
        secondIndex = arr2.length;
      } else {
        sum++;
      }
    }
    if (sum === arr2.length) {
      count++;
    }
  }
  return count;
};

//console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
