const longestSubstringSameK = (s, k) => {
  console.log(s);
  let endIndex = 0;
  let startIndex = 0;
  let map = new Map();
  while (endIndex < s.length) {
    if (map.has(s[endIndex])) {
      map.set(s[endIndex], map.get(s[endIndex]) + 1);
    } else {
      map.set(s[endIndex], 1);
    }
    console.log(map);
    endIndex++;
  }
};

//console.log(longestSubstringSameK('aaabbc', 3));
