const rotate = (nums, k) => {
  if (nums === null || nums.length === 0) {
    return;
  }
  k = k % nums.length;
  let copy = [...nums];
  for (let index = 0; index < k; index++) {
    let element = copy.pop();
    copy.unshift(element);
  }
  for (let index in copy) {
    nums[index] = copy[index];
  }
  return nums;
};
// rotate the array to the right by k places
//console.log(rotate([1, 2], 3));
