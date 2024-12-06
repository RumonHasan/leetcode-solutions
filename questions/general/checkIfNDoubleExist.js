const checkIfNDoubleExist = (arr) => {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (set.has(currNum / 2) || set.has(currNum * 2)) {
      console.log(arr);
      return true;
    }
    set.add(currNum);
  }
  return false;
};

console.log(checkIfNDoubleExist([10, 2, 5, 3]));

const longestCharacterReplacement = (s, k) => {
  console.log(s);
  let map = new Map();
  let start = 0;
  let end = 0;
  let maxLen = 0;
  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    while (end - start + 1 - Math.max(...map.values()) > k) {
      // checking with the current window
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);
        if (map.get(s[start]) === 0) {
          map.delete(s[start]);
        }
      }
      start++;
    }
    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }
  return maxLen;
};

console.log(longestCharacterReplacement('ABAB', 2));
