const editDistance = (word1, word2) => {
  let dp = new Array(word1.length + 1)
    .fill()
    .map((_) => new Array(word2.length + 1).fill(0));

  // populating the matrix column and row with indices of the words
  for (let i = 0; i < word1.length + 1; i++) {
    const index = word1.length - i;
    dp[i][word2.length] = index;
  }
  // populating the bottom row
  for (let i = 0; i < word2.length + 1; i++) {
    const index = word2.length - i;
    dp[word1.length][i] = index;
  }

  // now applying lcs in order to check for the minimum distance
  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]) + 1;
      }
    }
  }

  return dp[0][0]; // first element will contain the minimum possible value
};

// two dimensional dp approach using the bottom up approach
//console.log(editDistance('horse', 'ros'));

const maxGain = (s, x, y) => {
  let sub = '';
  let secondSub = '';
  let max = 0;
  let secondMax = 0;
  // assigining max and second max for stack removal
  if (x > y) {
    sub = 'ab';
    secondSub = 'ba';
    max = x;
    secondMax = y;
  } else {
    sub = 'ba';
    secondSub = 'ab';
    max = y;
    secondMax = x;
  }
  let total = 0;

  // main function to calculate score
  const stackRemoval = (s, sub, score) => {
    let points = 0;
    let newStr = '';
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      const currChar = s[i];
      if (
        stack.length &&
        stack[stack.length - 1] == sub[0] &&
        currChar == sub[1]
      ) {
        stack.pop();
        points += score;
      } else {
        stack.push(currChar);
      }
    }
    return {
      stack,
      points,
    };
  };

  // removing the largest one first then removing the smaller one
  const { stack, points } = stackRemoval(s, sub, max);
  total += points;
  const { stack: newString, points: newPoints } = stackRemoval(
    stack.join(''),
    secondSub,
    secondMax
  );
  total += newPoints;
  return total;
};

// ab is x and ba is y
//console.log(maxGain('aabbaaxybbaabb', 5, 4));

// deleting the chars enough to maintain a unique amount of frequencies of all the chars
const minDeletions = (s) => {
  let map = new Map();
  let used_set = new Set(); // will store the unique indices
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let operationCount = 0;
  let freqArray = [...map.values()];
  // need to work through frequencies
  for (let i = 0; i < freqArray.length; i++) {
    let currFreq = freqArray[i];
    // reducing the current freq here to make sure set contains unique only
    while (currFreq > 0 && used_set.has(currFreq)) {
      currFreq -= 1;
      operationCount++;
    }
    used_set.add(currFreq);
  }

  return operationCount;
};

//console.log(minDeletions('aaabbbcc'));

const findLeastNumberOfUnique = (arr, k) => {
  let map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let sortedFreq = [];
  for (const [key, count] of map) {
    const num = Number(key);
    sortedFreq.push([num, count]);
  }
  sortedFreq.sort((a, b) => a[1] - b[1]);
  // checking the least unique remaining nums
  let counter = 0;
  for (let i = 0; i < sortedFreq.length; i++) {
    const [_, count] = sortedFreq[i];
    counter += count;
    if (counter > k) {
      break;
    }
    sortedFreq[i][1] = 0;
  }
  let uniqueCount = sortedFreq.reduce((acc, curr) => {
    if (curr[1] !== 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return uniqueCount;
};

console.log(findLeastNumberOfUnique([4, 3, 1, 1, 3, 3, 2], 3));
