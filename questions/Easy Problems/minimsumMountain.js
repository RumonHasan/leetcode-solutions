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
