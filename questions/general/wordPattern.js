const wordPattern = (pattern, s) => {
  let map = new Map();
  let pArray = pattern.split('');
  let sArray = s.split(' ');
  let pSet = new Set([...pArray]);
  let sSet = new Set([...sArray]);
  if (pSet.size !== sSet.size) return false;
  if (pArray.length !== sArray.length) return false;

  for (let index in pattern) {
    const currPattern = pattern[index];
    const currWord = sArray[index];
    if (map.has(currPattern)) {
      const prevMapWord = map.get(currPattern);
      if (prevMapWord !== currWord) {
        return false;
      }
    }
    map.set(currPattern, currWord);
  }
  return true;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
