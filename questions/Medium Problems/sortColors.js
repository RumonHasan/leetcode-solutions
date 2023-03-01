const sortColors = (nums) => {
  let newArray = [];
  let colorHash = {};
  for (let index = 0; index < nums.length; index++) {
    colorHash[nums[index]]
      ? colorHash[nums[index]]++
      : (colorHash[nums[index]] = 1);
  }
  for (let [key, value] of Object.entries(colorHash)) {
    const number = Number(key);
    for (let index = 0; index < value; index++) {
      newArray.push(number);
    }
  }
  for (let index in newArray) {
    nums[index] = newArray[index];
  }
  return nums;
};

//console.log(sortColors([2, 0, 2, 1, 1, 0]));
