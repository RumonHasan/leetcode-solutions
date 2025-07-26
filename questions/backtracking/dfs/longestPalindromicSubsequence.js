const longestPalindromicSubsequence = (s) => {
  const memo = new Map();
  const recurse = (left, right) => {
    const key = `${left}-${right}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    // base case of outside boundary
    if (left >= s.length || right < 0) {
      return 0;
    }
    if (left > right) {
      return 0;
    }
    if (left === right) {
      return 1;
    }
    let currCount = 0;
    if (s[left] === s[right]) {
      currCount += 2 + recurse(left + 1, right - 1);
    } else {
      // getting the max out whether to increase or decrease left and right
      currCount = Math.max(recurse(left + 1, right), recurse(left, right - 1));
    }
    memo.set(key, currCount);
    return currCount;
  };
  return recurse(0, s.length - 1);
};

// using dfs memo to get the longest palindromic subsequence
console.log(longestPalindromicSubsequence('bbbab'));
