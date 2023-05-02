const longestContinuousSubstring = (s) => {
  s += ' '; // just to get the last index by making the empty string act as a dummy
  let maxSubstringLenCount = 0;
  let currentSubCount = 1;
  let charCode = s[0].charCodeAt();
  for (let index = 1; index < s.length; index++) {
    if (index === s.length - 1) {
      maxSubstringLenCount = Math.max(maxSubstringLenCount, currentSubCount);
    }
    if (s[index].charCodeAt() - charCode === 1) {
      currentSubCount++;
      charCode = s[index].charCodeAt();
    } else {
      charCode = s[index].charCodeAt();
      maxSubstringLenCount = Math.max(maxSubstringLenCount, currentSubCount);
      currentSubCount = 1;
    }
  }
  return maxSubstringLenCount;
};
// note: to get the longest substring possible
// console.log(longestContinuousSubstring('abcdef'));
