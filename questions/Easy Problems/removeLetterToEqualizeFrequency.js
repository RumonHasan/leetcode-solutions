const equalFrequency = (word) => {
  let map = new Map();
  for (let char of word) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  for (let index = 0; index < word.length; index++) {
    if (map.has(word[index])) {
      let check = true;
      let mapCopy = new Map(map);
      if (mapCopy.has(word[index])) {
        mapCopy.set(word[index], mapCopy.get(word[index]) - 1);
      }
      let mapCopyValues = [...mapCopy.values()];
      let nonZeroVal = 0;
      for (let index in mapCopyValues) {
        if (mapCopyValues[index] !== 0) {
          nonZeroVal = mapCopyValues[index];
          break;
        }
      }
      for (let index = 0; index < mapCopyValues.length; index++) {
        if (mapCopyValues[index] !== 0 && mapCopyValues[index] !== nonZeroVal) {
          check = false;
          break;
        }
      }
      if (check) {
        return true;
      }
    }
  }
  return false;
};

// check for edge cases for doubled pair letters
//console.log(equalFrequency('abcc'));
