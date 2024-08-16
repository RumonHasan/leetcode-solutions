const takeCharacters = (s, k) => {
  let map = new Map([
    ['a', 0],
    ['b', 0],
    ['c', 0],
  ]);
  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    }
  }
  // finding after k removal
  for (let [key, _] of map) {
    map.set(key, map.get(key) - k);
    if (map.get(key) < 0) {
      // default case for one value below 0 since all of them needs to be reduced
      return -1;
    }
  }
  // primary sliding window to check max
  let maxLen = 0;
  let end = 0;
  let start = 0;
  let countMap = new Map();
  while (end < s.length) {
    const currChar = s[end];
    countMap.set(currChar, (countMap.get(currChar) || 0) + 1);
    // slide reduction
    while (map.get(s[end]) < countMap.get(s[end])) {
      if (countMap.has(s[start])) {
        countMap.set(s[start], countMap.get(s[start]) - 1);
      }
      start++;
    }
    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }
  return s.length - maxLen;
};
// using hashmap and counting sliding window in order to make sure the count dont exceed k
//console.log(takeCharacters('aabaaaacaabc', 2));
