const minSwaps = (word1, word2) => {
  const getOc = (s) => {
    let map = new Map();
    for (let char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  };
  let mapOne = getOc(word1);
  let mapTwo = getOc(word2);
  let mapOneKeys = [...mapOne.keys()];
  let mapTwoKeys = [...mapTwo.keys()];
  //console.log(mapOneKeys, mapTwoKeys);
  // swapping based on map letters and incrementing and decrementing them
  const deleteKey = (key, map) => {
    if (map.get(key) === 0) {
      map.delete(key);
    } else {
      return;
    }
  };

  for (let i = 0; i < mapOneKeys.length; i++) {
    const mapOneLetter = mapOneKeys[i];
    for (let j = 0; j < mapTwoKeys.length; j++) {
      const mapTwoLetter = mapTwoKeys[j];
      // remove letter one and add letter two
      if (mapOne.has(mapOneLetter)) {
        mapOne.set(mapOneLetter, mapOne.get(mapOneLetter) - 1);
        deleteKey(mapOneLetter, mapOne);
      }
      if (mapOne.has(mapTwoLetter)) {
        mapOne.set(mapTwoLetter, mapOne.get(mapTwoLetter) + 1);
      } else {
        mapOne.set(mapTwoLetter, 1);
      }
      // remove from letter two and add one
      if (mapTwo.has(mapTwoLetter)) {
        mapTwo.set(mapTwoLetter, mapTwo.get(mapTwoLetter) - 1);
        deleteKey(mapTwoLetter, mapTwo);
      }
      if (mapTwo.has(mapOneLetter)) {
        mapTwo.set(mapOneLetter, mapTwo.get(mapOneLetter) + 1);
      } else {
        mapTwo.set(mapOneLetter, 1);
      }
      if (mapOne.size === mapTwo.size) return true;
      // readding back for the next letter
      if (mapOne.has(mapTwoLetter)) {
        mapOne.set(mapTwoLetter, mapOne.get(mapTwoLetter) - 1);
        deleteKey(mapTwoLetter, mapOne);
      }
      // add letter one
      if (mapOne.has(mapOneLetter)) {
        mapOne.set(mapOneLetter, mapOne.get(mapOneLetter) + 1);
      } else {
        mapOne.set(mapOneLetter, 1);
      }

      // remove letter one form two
      if (mapTwo.has(mapOneLetter)) {
        mapTwo.set(mapOneLetter, mapTwo.get(mapOneLetter) - 1);
        deleteKey(mapOneLetter, mapTwo);
      }
      if (mapTwo.has(mapTwoLetter)) {
        mapTwo.set(mapTwoLetter, mapTwo.get(mapTwoLetter) + 1);
      } else {
        mapTwo.set(mapTwoLetter, 1);
      }
    }
  }
  return false;
};

// to get distinct chars
//console.log(minSwaps('abcc', 'aab'));
