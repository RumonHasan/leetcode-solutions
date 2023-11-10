const minimumSum = (nums) => {
  const bruteForce = () => {
    let minSum = Infinity;
    for (let i = 0; i < nums.length; i++) {
      let one = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        let two = nums[j];
        for (let k = j + 1; k < nums.length; k++) {
          let three = nums[k];
          let sum = one + two + three;
          if (one < two && two > three) {
            minSum = Math.min(minSum, sum);
          }
        }
      }
    }
    return minSum === Infinity ? -1 : minSum;
  };

  //console.log(bruteForce());
};

//console.log(minimumSum([5, 4, 8, 7, 10, 2]));

const maximumTripletValue = (nums) => {
  let maximum = -Infinity;
  for (let index = 0; index < nums.length; index++) {
    const one = nums[index];
    for (let subIndex = index + 1; subIndex < nums.length; subIndex++) {
      const two = nums[subIndex];
      for (
        let thirdIndex = subIndex + 1;
        thirdIndex < nums.length;
        thirdIndex++
      ) {
        const three = nums[thirdIndex];
        let maximumLocal = (one - two) * three;
        maximum = Math.max(maximumLocal, maximum);
      }
    }
  }
  return maximum < 0 ? 0 : maximum;
};
//console.log(maximumTripletValue([12, 6, 1, 2, 7]));
