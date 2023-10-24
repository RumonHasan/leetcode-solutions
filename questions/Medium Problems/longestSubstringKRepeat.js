const longestSubstringKRepeat = (s, k) => {
  console.log(s);
  let map = new Map();
  for (const char of s) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  console.log(map);
  let start = 0;
  let end = 0;
  let maxLen = 0;
  while (end < s.length) {
    const char = s[end];
    if (map.has(char) && map.get(char) < k) {
      start = end + 1;
    }
    console.log(start, end);
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

console.log(longestSubstringKRepeat('ababacb', 3));
