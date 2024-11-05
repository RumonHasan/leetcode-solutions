const favoriteCompanies = (favoriteCompanies) => {
  // checking for found subsets
  let indices = [];

  for (let i = 0; i < favoriteCompanies.length; i++) {
    let subsetCheck = false;
    for (let j = 0; j < favoriteCompanies.length; j++) {
      if (i !== j) {
        let subSet = new Set([...favoriteCompanies[j]]);
        const check = favoriteCompanies[i].every((company) =>
          subSet.has(company)
        );
        if (check) {
          subsetCheck = check;
          break;
        }
      }
    }
    if (!subsetCheck) {
      indices.push(i);
    }
  }

  return indices.sort((a, b) => a - b);
};

// console.log(
//   favoriteCompanies([
//     ['leetcode', 'google', 'facebook'],
//     ['google', 'microsoft'],
//     ['google', 'facebook'],
//     ['google'],
//     ['amazon'],
//   ])
// );

const countSubarrays = (nums, k) => {
  let max = Math.max(...nums);
  // check for k times count subarrays
  let end = 0;
  let count = 0;
  let subCount = 0;
  let start = 0;
  while (end < nums.length) {
    if (nums[end] === max) {
      count++;
    }
    while (count === k) {
      if (nums[start] === max) {
        count--;
      }
      start++;
    }
    subCount += start > 0 ? start : 0;
    end++;
  }
  // main logic is once it hits the required k elements its the entire subarray that becomes a possible subarray so only have to reduce from the start to filter out
  return subCount;
};

//console.log(countSubarrays([1, 3, 2, 3, 3], 2));

const completeSubarray = (nums) => {
  let setSize = new Set([...nums]).size;
  let map = new Map();
  let end = 0;
  let start = 0;
  let size = 0;
  while (end < nums.length) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    while (map.size === setSize) {
      // limits based on equality of size of set and map
      if (map.has(nums[start])) {
        map.set(nums[start], map.get(nums[start]) - 1);
        if (map.get(nums[start]) === 0) {
          map.delete(nums[start]);
        }
      }
      console.log(map);
      start++;
    }
    size += start > 0 ? start : 0;
    end++;
  }
  return size;
};

//console.log(completeSubarray([1, 3, 1, 2, 2]));
