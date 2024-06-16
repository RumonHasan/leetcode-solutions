const minIncrementForUnique = (nums) => {
  const sortingSolution = () => {
    nums.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 1; i < nums.length; i++) {
      let current = nums[i];
      let prev = nums[i - 1];
      if (current === prev && i === 1) {
        nums[i] += 1;
        counter++;
      }
      if (current === prev && i > 1) {
        nums[i] += 1;
        counter++;
      } else if (current < prev) {
        let diff = prev - current + 1;
        nums[i] += diff;
        counter += diff;
      }
    }
    return counter;
  };
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
// 1 1 2 2 3 7
// 1 2 3 2
