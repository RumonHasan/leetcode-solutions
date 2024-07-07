const stringSplits = (s) => {
  let mapOne = new Map();
  let mapTwo = new Map();
  let counter = 0;
  // using two maps delete the chars from two of one then compare
  const compareMaps = (mapone, maptwo) => {
    for (let [key, val] of maptwo) {
      mapone.set(key, mapone.get(key) - val);
      if (mapone.get(key) === 0) {
        mapone.delete(key);
      }
    }
    return mapone.size === maptwo.size;
  };
  for (let i = 0; i < s.length; i++) {
    let currLetter = s[i];
    mapOne.set(currLetter, (mapOne.get(currLetter) || 0) + 1);
  }
  // iterate through the string one more time and check for the second string
  for (let j = 0; j < s.length; j++) {
    const currLetter = s[j];
    mapTwo.set(currLetter, (mapTwo.get(currLetter) || 0) + 1);
    let mapone = new Map(mapOne);
    if (compareMaps(mapone, mapTwo)) {
      counter++;
    }
  }
  return counter;
};

//console.log(stringSplits('aaaaa'));
