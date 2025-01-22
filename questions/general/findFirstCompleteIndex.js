const firstCompleteIndex = (arr, mat) => {
  // default indices counter arrays for both rows and cols
  let rowsIndexArray = new Array(mat.length).fill(0);
  let colsIndexArray = new Array(mat[0].length).fill(0);
  const ROW_LEN = mat[0].length; // number of cells needed to complete a row
  const COL_LEN = mat.length;
  let map = new Map();

  // create table that contains indices of every number
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const row = i;
      const col = j;
      const currNum = mat[row][col];
      map.set(currNum, [row, col]);
    }
  }

  // checking counter for each indices
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (map.has(currNum)) {
      const [row, col] = map.get(currNum);
      rowsIndexArray[row]++;
      colsIndexArray[col]++;
      const rowVal = rowsIndexArray[row];
      const colVal = colsIndexArray[col];
      if (rowVal === ROW_LEN || colVal === COL_LEN) {
        return i;
      }
    }
  }
};

// step -1 getting the table that contains all the cords of each number
// step 2- getting the row index array and col index array to store the counters
// console.log(
//   firstCompleteIndex(
//     [1, 4, 5, 2, 6, 3],
//     [
//       [4, 3, 5],
//       [1, 2, 6],
//     ]
//   )
// );

const countNumberOfGoodSubarrays = (nums, k) => {
  let pairMap = new Map();
  let pairCount = 0;
  const len = nums.length;

  let end = 0;
  let left = 0;

  let totalPairCount = 0;

  while (end < nums.length) {
    pairMap.set(nums[end], (pairMap.get(nums[end]) || 0) + 1); // adding elements and their count
    pairCount += pairMap.get(nums[end]) - 1; // example count 4 means there can be 3 combination of pairs

    // if the pair count exceeds k then reduce it and calculate the number of subarrays
    if (pairCount >= k) {
      while (left < nums.length && pairCount >= k) {
        totalPairCount += len - end;

        // reduce the pairs
        pairMap.set(nums[left], (pairMap.get(nums[left]) || 0) - 1);
        pairCount -= pairMap.get(nums[left]);
        if (pairMap.get(nums[left]) === 0) {
          pairMap.delete(nums[left]);
        }

        left++;
      }
    }

    end++;
  }

  return totalPairCount;
};

// console.log(countNumberOfGoodSubarrays([3, 1, 4, 3, 2, 2, 4], 2));

const resultArray = (nums) => {
  let one = [];
  let two = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (i === 0) {
      one.push(nums[i]);
    } else if (i === 1) {
      two.push(nums[i]);
    } else {
      const check = one[one.length - 1] > two[two.length - 1];
      if (check) {
        one.push(curr);
      } else {
        two.push(curr);
      }
    }
  }

  return [...one, ...two];
};

//console.log(resultArray([2, 1, 3]));

const mostCommonWords = (paragraph, banned) => {
  const arr = paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ') // replace punctuation with spaces
    .split(/\s+/) // split on whitespace
    .filter((word) => word);
  let maxCounter = 0;
  let map = new Map();
  // main iteration
  for (let word of arr) {
    const wordLower = word.toLowerCase();
    if (!banned.includes(wordLower)) {
      map.set(wordLower, (map.get(wordLower) || 0) + 1);
      if (map.get(wordLower) > maxCounter) {
        maxCounter = map.get(wordLower);
      }
    }
  }
  // getting the max key of value
  for (const [key, value] of map) {
    if (value === maxCounter) {
      return key;
    }
  }
};

console.log(
  mostCommonWords('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ])
);

const harmoniusSubs = (nums) => {
  let map = new Map();
  let max = 0;
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, val] of map) {
    if (map.has(key + 1)) {
      max = Math.max(max, val + map.get(key + 1));
    }
  }
  return max;
};

// console.log(harmoniusSubs([1, 3, 2, 2, 5, 2, 3, 7]));

const sumCounts = (nums) => {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let set = new Set();
    for (let j = i; j < nums.length; j++) {
      set.add(nums[j]);
      ans += Math.pow(set.size, 2);
    }
  }
  return ans;
};

console.log(sumCounts([1, 2, 1]));
