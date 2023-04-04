const minimumRecolors = (blocks, k) => {
  // create subs
  let collection = [];
  for (let i = 0; i < blocks.length; i++) {
    for (let j = i; j < blocks.length; j++) {
      const substring = blocks.slice(i, j + 1);
      if (substring.length <= k) {
        collection = [...collection, substring];
      }
    }
  }
  let result = Infinity;
  for (let index in collection) {
    let singleCollection = collection[index];
    let whiteCounter = 0;
    for (let secondIndex in singleCollection) {
      if (singleCollection[secondIndex] === 'W') {
        whiteCounter++;
      }
    }
    if (singleCollection.length === k) {
      result = Math.min(result, whiteCounter);
    }
  }
  return result;
};

//console.log(minimumRecolors('WBBWWBBWBW', 7));
