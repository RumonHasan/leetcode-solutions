const longestRepeatingCharacterReplacement = (s, k) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let maxLength = 0;
  while (end < s.length) {
    if (map.has(s[end])) {
      map.set(s[end], map.get(s[end]) + 1);
    } else {
      map.set(s[end], 1);
    }
    // checking the max occurences and reducing the substring accordingly
    while (end - start + 1 - Math.max(...map.values()) > k) {
      if (map.get(s[start]) === 0) {
        map.delete(s[start]);
      }
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
};

//console.log(longestRepeatingCharacterReplacement('ABABBAA', 2));
