const triangularSum = (nums) => {
  console.log(nums);
  let dp = [];
  for (let index = nums.length; index > 0; index--) {
    dp.push(new Array(index).fill(0));
    if (index === 0) break;
  }
  console.log(dp);
  // injecting numbers into dp
  for (let index = 0; index < dp.length; index++) {
    let dpRow = dp[index];
    for (let subIndex = 0; subIndex < dpRow.length; subIndex++) {
      if (index === 0) {
        dp[index][subIndex] = nums[subIndex];
      }
      if (index > 0) {
        dp[index][subIndex] =
          dp[index - 1][subIndex] + dp[index - 1][subIndex + 1];
      }
    }
  }
  console.log(dp);
};

// console.log(triangularSum([1, 2, 3, 4, 5]));s

const peakIndex = (arr) => {
  let end = 0;
  while (end < arr.length) {
    if (arr[end] < arr[end + 1]) {
      while (end < arr.length && arr[end] < arr[end + 1]) {
        end++;
      }
      return end;
    }
  }
};

// console.log(peakIndex([0, 10, 5, 2]));
// two boat limit
const boatsToSavePeople = (people, limit) => {
  people.sort((a, b) => a - b);
  console.log(people);
  let right = people.length - 1;
  let left = 0;
  let boatCount = 0;
  while (left <= right) {
    if (people[left] + people[right] > limit) {
      right--;
      boatCount++;
    } else if (people[left] + people[right] <= limit) {
      left++;
      right--;
      boatCount++;
    }
  }
  return boatCount;
};

// console.log(boatsToSavePeople([2, 2], 6));

const groupAnagrams = (strs) => {
  //
  let map = new Map();
  let end = 0;
  const convertString = (word) =>
    word
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  while (end < strs.length) {
    const word = convertString(strs[end]);
    const normalWord = strs[end];
    if (map.has(word)) {
      map.get(word).push(normalWord);
    } else {
      map.set(word, [normalWord]);
    }
    end++;
  }
  return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
