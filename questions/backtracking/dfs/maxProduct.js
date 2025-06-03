const maxProduct = (s) => {
  // checking whether its a palindrome of not
  const isPalindromeCheck = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let maxLen = 0;

  const dfs = (currIndex, subOne, subTwo) => {
    // primary base case
    if (currIndex >= s.length) {
      if (isPalindromeCheck(subOne) && isPalindromeCheck(subTwo)) {
        maxLen = Math.max(maxLen, subOne.length * subTwo.length);
        return maxLen;
      }
      return 0;
    }
    // three conditions
    let skipCurrentChar = dfs(currIndex + 1, subOne, subTwo);
    let addToSubOne = dfs(currIndex + 1, subOne + s[currIndex], subTwo);
    let addToSubTwo = dfs(currIndex + 1, subOne, subTwo + s[currIndex]);
    return Math.max(skipCurrentChar, addToSubOne, addToSubTwo);
  };

  dfs(0, '', '');

  return maxLen;
};

/**
 * Adding one character at a time to every subsequence then running dfs
 * Three main conditions
 * Either select a character and add it to sub1 or then add it to sub2
 * Skip the current character
 * Accumulate the result max and return the result
 */
console.log(maxProduct('leetcodecom'));
