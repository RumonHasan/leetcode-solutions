const longestPalindromicSubstringRetry = (s) => {
  console.log(s);
  let centralEndIndex = 0;
  let biggestSlice = s[0];
  // edge case
  while (centralEndIndex < s.length) {
    // indexes are in the measure for a single letter value
    let leftIndex = centralEndIndex === 0 ? 0 : centralEndIndex - 1;
    let rightIndex = centralEndIndex === 0 ? 0 : centralEndIndex + 1;
    // for odd pair iteration
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      const slice = s.slice(leftIndex, rightIndex + 1);
      if (slice.length > biggestSlice.length) {
        biggestSlice = slice;
      }
      leftIndex--;
      rightIndex++;
    }
    // for even pairs
    leftIndex = centralEndIndex;
    rightIndex = centralEndIndex + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      const slice = s.slice(leftIndex, rightIndex + 1);
      if (slice.length > biggestSlice.length) {
        biggestSlice = slice;
      }
      leftIndex--;
      rightIndex++;
    }
    centralEndIndex++;
  }
  return biggestSlice;
};
// get the longest palindromic substring collection and get the longest out of the collection of all the substrings
//console.log(longestPalindromicSubstringRetry('babad'));
