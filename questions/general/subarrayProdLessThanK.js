const subArrayProdLessThanK = (nums, k) => {
  let finalSubCount = 0;
  let end = 0;
  let start = 0;
  let currProd = 1;
  while (end < nums.length) {
    currProd *= nums[end];
    // reducing curr prod by the start control in order bring it back to k
    while (currProd >= k) {
      currProd = currProd / nums[start];
      start++;
    }
    const range = end - start + 1;
    finalSubCount += range; // adding the range length in order to check for the count
    end++;
  }
  return finalSubCount;
};

//console.log(subArrayProdLessThanK([10, 5, 2, 6], 100));
