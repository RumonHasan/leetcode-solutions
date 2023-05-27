const lengthOfLongestSubstring = (s) => {
  let map = new Map();
  let endIndex = 0;
  let startIndex = 0;
  let maxLength = 0;
  while (endIndex < s.length) {
    if (map.has(s[endIndex])) {
      map.set(s[endIndex], map.get(s[endIndex]) + 1);
    } else {
      map.set(s[endIndex], 1);
    }
    while (map.get(s[endIndex]) > 1) {
      if (map.get(s[startIndex]) === 0) {
        map.delete(s[startIndex]);
      }
      map.set(s[startIndex], map.get(s[startIndex]) - 1);
      startIndex++;
    }
    maxLength = Math.max(endIndex - startIndex + 1, maxLength);
    endIndex++;
  }
  return maxLength;
};

//console.log(lengthOfLongestSubstring('abcabcbb'));
