const strictEasy = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const newNums = [...nums];
    newNums.splice(i, 1);
    let check = true;
    for (let i = 0; i < newNums.length; i++) {
      const currNum = newNums[i];
      const nextNum = newNums[i + 1];
      if (nextNum <= currNum) {
        check = false;
      }
    }
    if (check) return true;
  }
  return false;
};
// maximum count = 1
// converting the comparison in brackets and checking
//console.log(strictEasy([1, 2, 10, 5, 7]));
