const countHillValley = (nums) => {
  //   console.log(nums);
  // removing the duplicates
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      newArray.push(nums[i]);
    } else {
      if (newArray[newArray.length - 1] !== nums[i]) {
        newArray.push(nums[i]);
      } else {
        continue;
      }
    }
  }
  // counting the hills and valleys
  let counter = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      continue;
    } else if (i === newArray.length - 1) {
      continue;
    } else {
      // only for the inbetween numbers
      if (newArray[i - 1] < newArray[i] && newArray[i + 1] < newArray[i]) {
        counter++;
      }
      if (newArray[i - 1] > newArray[i] && newArray[i + 1] > newArray[i]) {
        counter++;
      }
    }
  }
  return counter;
};

//console.log(countHillValley([2, 4, 1, 1, 6, 5]));
