const minimumLength = (s) => {
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let mapTwo = new Map();
  for (let [key, value] of map) {
    if (value >= 3) {
      if (value % 2 === 1) {
        mapTwo.set(key, (mapTwo.get(key) || 0) + 1);
      } else if (value % 2 === 0) {
        mapTwo.set(key, (mapTwo.get(key) || 0) + 2);
      }
    }
  }
  // traversing both the maps
  let finalLength = 0;
  for (let [key, value] of map) {
    if (mapTwo.has(key)) {
      finalLength += mapTwo.get(key);
    } else {
      finalLength += value;
    }
  }
  return finalLength;
};

// deleting chars to the left and right and returning the total length
console.log(minimumLength('abaacbcbb'));
