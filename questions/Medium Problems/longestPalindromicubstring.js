const longestPalindromicSubstrings = (s) => {
  // main iteration
  let palindrome = s[0];
  for (let index = 0; index < s.length; index++) {
    // odd pair
    let leftIndex = index - 1;
    let rightIndex = index + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      const localPalindrome = s.slice(leftIndex, rightIndex + 1);
      if (localPalindrome.length > palindrome.length) {
        palindrome = localPalindrome;
      }
      leftIndex--;
      rightIndex++;
    }
    // even pair => switching indexes
    leftIndex = index;
    rightIndex = index + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      const localPalindrome = s.slice(leftIndex, rightIndex + 1);
      if (localPalindrome.length > palindrome.length) {
        palindrome = localPalindrome;
      }
      leftIndex--;
      rightIndex++;
    }
  }
  return palindrome;
};

console.log(longestPalindromicSubstrings('aba'));
