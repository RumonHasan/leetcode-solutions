const minDeleteSum = (s1, s2) => {
  let dp = new Array(s1.length + 1)
    .fill()
    .map(() => new Array(s2.length + 1).fill(0));

  // get the base case getting the char codes for the last chars
  for (let i = s1.length - 1; i >= 0; i--) {
    dp[i][s2.length] = dp[i + 1][s2.length] + s1.charCodeAt(i);
  }

  for (let j = s2.length - 1; j >= 0; j--) {
    dp[s1.length][j] = dp[s1.length][j + 1] + s2.charCodeAt(j);
  }

  // get the longest subsequence

  for (let i = s1.length - 1; i >= 0; i--) {
    for (let j = s2.length - 1; j >= 0; j--) {
      const charOne = s1[i];
      const charTwo = s2[j];

      if (charOne === charTwo) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(
          dp[i + 1][j] + s1.charCodeAt(i),
          dp[i][j + 1] + s2.charCodeAt(j)
        );
      }
    }
  }

  return dp[0][0];
};

console.log(minDeleteSum('delete', 'leet'));

const minOperations = (nums) => {
  let counter = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const numeOne = nums[i];
    const numsTwo = nums[i + 1];
    const numsThree = nums[i + 2];

    if (numeOne === 0) {
      counter++;
      nums[i] = numeOne === 0 ? 1 : 0;
      nums[i + 1] = numsTwo === 0 ? 1 : 0;
      nums[i + 2] = numsThree === 0 ? 1 : 0;
    }
  }
  for (let num of nums) {
    if (num === 0) {
      return -1;
    }
  }

  return counter;
};

//console.log(minOperations([0, 1, 1, 1, 0, 0]));
const groupThePeople = (groupSizes) => {
  let map = new Map(); // will contain the id then group size
  let result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const currPersonGroupSize = groupSizes[i];
    if (map.has(currPersonGroupSize)) {
      map.get(currPersonGroupSize).push(i);
    } else {
      map.set(currPersonGroupSize, [i]);
    }
  }
  // now for each group sizes I can partition the list of ids based on sizes
  for (const [key, value] of map) {
    let sub = [];
    const groupSizeLimit = Number(key);
    let currGroupSize = 0;
    for (let i = 0; i < value.length; i++) {
      const currValue = value[i];
      sub.push(currValue);
      currGroupSize++;
      // if the group size is equal then push it to result and reset the curr params
      if (currGroupSize === groupSizeLimit) {
        result.push(sub);
        sub = [];
        currGroupSize = 0;
      }
    }
  }

  return result;
};

// the group sizes are also determined by the overall size of the ith person
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
