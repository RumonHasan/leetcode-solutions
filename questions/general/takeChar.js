const takeChar = (s, k) => {
  let map = new Map();
  for (const char of s) {
    if (char == 'a' || char == 'b' || char == 'c') {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  if (map.size < 3) {
    return -1;
  }
  // reducing the map with k
  for (const [key, value] of map) {
    if (value < 0 || value < k) {
      return -1;
    }
    map.set(key, map.get(key) - k);
  }
  // instead of removing from the back I can remove from the middle
  let newMap = new Map();
  let end = 0;
  let start = 0;
  let subLen = 0;
  while (end < s.length) {
    newMap.set(s[end], (newMap.get(s[end]) || 0) + 1);
    while (map.get(s[end]) < newMap.get(s[end])) {
      // when it exceeds the old map count then reduce
      newMap.set(s[start], newMap.get(s[start]) - 1);
      if (newMap.get(s[start]) === 0) {
        newMap.delete(s[start]);
      }
      start++;
    }
    subLen = Math.max(subLen, end - start + 1);
    end++;
  }

  return s.length - subLen;
};

console.log(takeChar('aabaaaacaabc', 2));
