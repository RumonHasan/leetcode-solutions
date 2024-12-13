const findScore = (nums) => {
  let array = nums.map((num, index) => [num, index]);
  // sorting based on value then index
  let sorted = array.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  // now checking per element
  let total = 0;
  let boolArray = new Array(nums.length).fill(false);
  for (let i = 0; i < sorted.length; i++) {
    const [num, index] = sorted[i];
    const nextIndex = index + 1;
    const prevIndex = index - 1;
    // check for bool state form indexing array
    if (!boolArray[index]) {
      total += num;
      boolArray[index] = true;
      boolArray[nextIndex] = true;
      boolArray[prevIndex] = true;
    }
  }
  return total;
};
/*) [1, 2, 2, 3, 3, 5]*/

console.log(findScore([2, 1, 3, 4, 5, 2]));
