const divideArray = (nums, k) => {
  const numOfParitions = nums.length / 3;
  nums.sort((a, b) => a - b);
  let end = 2;
  let stack = [];
  let check = true;
  while (end < nums.length) {
    const currNum = nums[end];
    const prevNum = nums[end - 1];
    const sPrevNum = nums[end - 2];
    if (
      Math.abs(currNum - prevNum) <= k &&
      Math.abs(prevNum - sPrevNum) <= k &&
      Math.abs(sPrevNum - currNum) <= k
    ) {
      stack.push([currNum, prevNum, sPrevNum]);
    } else {
      check = false;
      break;
    }
    end += 3;
  }
  if (!check) return [];

  return stack.length === numOfParitions ? stack : [];
};

//console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
