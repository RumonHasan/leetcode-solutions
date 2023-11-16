const maxFreq = (s, maxLetters, minSize, maxSize) => {
  let map = new Map();
  let subMap = new Map();
  let subString = '';
  for (let index = 0; index < minSize; index++) {
    subString += s[index];
    if (map.has(s[index])) {
      map.set(s[index], map.get(s[index]) + 1);
    } else {
      map.set(s[index], 1);
    }
  }
  if (map.size <= maxLetters) {
    subMap.set(subString, 1);
  }
  let end = minSize;
  let start = 0;
  while (end < s.length) {
    subString = subString.slice(1, subString.length);
    subString += s[end];
    map.set(s[start], map.get(s[start]) - 1);
    if (map.get(s[start]) <= 0) map.delete(s[start]);
    map.has(s[end]) ? map.set(s[end], map.get(s[end]) + 1) : map.set(s[end], 1);
    if (map.size <= maxLetters) {
      if (subMap.has(subString)) {
        subMap.set(subString, subMap.get(subString) + 1);
      } else {
        subMap.set(subString, 1);
      }
    }
    start++;
    end++;
  }
  let max = 0;
  for (let [key, value] of subMap) {
    if (value > max) {
      max = value;
    }
  }
  return max;
};

//console.log(maxFreq('aababcaab', 2, 3, 4));
