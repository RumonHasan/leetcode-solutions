const wordPattern = (pattern, s) => {
  let patternMap = new Map();
  let array = s.split(' ');
  // egde case
  if (pattern.length !== array.length) {
    return false;
  }
  let patternArray = new Array(...new Set([...array]));
  let sArray = new Array(...new Set([...pattern.split('')]));

  if (patternArray.length !== sArray.length) {
    return false;
  }
  for (let index in patternArray) {
    patternMap.set(patternArray[index], sArray[index]);
  }
  // checking for pattern
  for (let index in pattern) {
    let patternChar = pattern[index];
    let sWord = array[index];

    if (patternMap.has(sWord)) {
      const check = patternMap.get(sWord);
      if (check !== patternChar) {
        return false;
      }
    }
  }

  return true;
};

console.log(wordPattern('aba', 'dog cat cat'));
