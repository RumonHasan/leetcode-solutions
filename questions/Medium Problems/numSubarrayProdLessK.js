const numSubarrayProductLessThanK = (nums, k) => {
  console.log(nums);

  // brute force appraoch creating and checking all subarrays
  const bruteForce = () => {
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
      let subProd = 1;
      for (let subIndex = index; subIndex < nums.length; subIndex++) {
        subProd *= nums[subIndex];
        if (subProd < k) {
          counter++;
        }
      }
    }
    return counter;
  };

  // console.log(bruteForce());
};

//console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

const smoothDecent = (prices) => {
  let descent = 0;
  let startIndex = 0;
  let collection = [];
  for (let index = 0; index < prices.length; index++) {
    if (
      prices[index] > prices[index + 1] &&
      prices[index] - prices[index + 1] === 1
    ) {
      while (prices[index] - prices[index + 1] === 1) {
        index++;
      }
      collection.push([startIndex, index]);
      startIndex = index + 1;
    } else {
      startIndex = index + 1;
      descent++;
    }
  }
  for (let index = 0; index < collection.length; index++) {
    let len = collection[index][1] - collection[index][0] + 1;
    let totalSubs = (len * (len + 1)) / 2;
    descent += totalSubs;
  }
  return descent;
};

// console.log(
//   smoothDecent([3, 9, 8, 7, 6, 5, 4, 3, 5, 4, 3, 4, 3, 3, 3, 7, 6, 5, 4])
// );

/* 
    32
    321
    3214
    21
    214
    14
*/
