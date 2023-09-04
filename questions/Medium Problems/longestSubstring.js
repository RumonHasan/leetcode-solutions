const longestSubstring = (s, k) => {
  const slidingWindowApproach = (s, k) => {
    let map = new Map();
    for (const char of s) {
      map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    }
    // console.log(map);
    // for no char check
    let end = 0;
    let maxLen = 0;
    let start = 0;
    while (end < s.length) {
      const char = s[end];
      if (map.get(char) < k) {
        start = end;
      }
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
    }
    return maxLen;
  };

  // console.log(slidingWindowApproach(s, k));
};

// console.log(longestSubstring('ababacb', 3));
