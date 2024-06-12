const countDistinct = (nums, k, p) => {
  const subCheck = (sub) => {
    let count = 0;
    for (let num of sub) {
      if (num % p === 0) {
        count++;
      }
    }
    return count <= k;
  };
  let subSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    let firstCount = 0;
    for (let j = i; j < nums.length; j++) {
      let subArray = nums.slice(i, j + 1);
      if (nums[j] % p === 0) firstCount++;
      if (firstCount > k) break;
      if (subCheck(subArray)) {
        let subString = subArray.toString();
        subSet.add(subString);
      }
    }
  }
  return subSet.size;
};

//console.log(countDistinct([2, 3, 3, 2, 2], 2, 2));
