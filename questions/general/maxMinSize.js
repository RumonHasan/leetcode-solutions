const maxMinSize = (s, maxLetters, minSize, maxSize) => {
  let map = new Map();
  let subMap = new Map();
  let string = '';
  let maxSubCount = 0;
  for (let i = 0; i < minSize; i++) {
    const currLetter = s[i];
    map.set(currLetter, (map.get(currLetter) || 0) + 1);
    string += currLetter;
  }
  if (map.size <= maxLetters) {
    subMap.set(string, (subMap.get(string) || 0) + 1);
    maxSubCount = subMap.get(string);
  }
  let end = minSize;
  let sArray = string.split('');
  // remaining sliding window logic
  while (end < s.length) {
    const currLetter = s[end];
    let firstLetter = sArray.shift();
    if (map.has(firstLetter)) {
      map.set(firstLetter, map.get(firstLetter) - 1);
      if (map.get(firstLetter) === 0) map.delete(firstLetter);
    }
    sArray.push(currLetter);
    if (map.get(currLetter)) {
      map.set(currLetter, map.get(currLetter) + 1);
    } else {
      map.set(currLetter, 1);
    }
    let newString = sArray.join('');
    if (map.size <= maxLetters) {
      subMap.set(newString, (subMap.get(newString) || 0) + 1);
      maxSubCount = Math.max(maxSubCount, subMap.get(newString));
    }
    end++;
  }
  return maxSubCount;
};

// using minSize to check since checking with minSize will have higher chances of existing
console.log(maxMinSize('aaaaacbc', 2, 4, 6));
