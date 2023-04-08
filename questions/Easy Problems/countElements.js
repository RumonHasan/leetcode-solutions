const countElements = (nums) => {
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);
  let counter = 0;
  for (let index in nums) {
    const number = nums[index];
    if (number > minNum && number < maxNum) {
      counter++;
    }
  }
  return counter;
};

//console.log(countElements([11, 7, 2, 15, 16]));
