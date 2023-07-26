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
        // key deletion when occurence hits zero
        if (mapCopy.get(word[index]) === 0) {
          mapCopy.delete(word[index]);
        }
      }
      // this step can be ignored now after deletion of the character
      let mapCopyValues = [...mapCopy.values()];
      let nonZeroVal = 0;
      // getting the non zero value in order to check against the entire array for equality
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
// Initial thinking process using the brute force approach
// using map approach for initial count of the letters then using a set of nested for loops in order to traverse the map
// and get the nonzero values and checking true or false value pairs
// then checking whether one set of map values have all equal numbers or not
// note that if there is a zero occurence then that number is automatically ignored.
// the code probably can be optimized by deleting off the zero element of and removing it completely from the map and then doing the brute force iteration
// check for edge cases for doubled pair letters
//console.log(equalFrequency('abcc'));
