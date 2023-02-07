const countGoodSubstring = (s) => {
  // brute force to get the substrings
  let collection = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const slice = s.slice(i, j + 1);
      if (slice.length === 3) {
        collection.push(slice);
      }
    }
  }
  // using sets to check unique
  let count = 0;
  for (let index in collection) {
    const indexArray = collection[index].split('');
    const indexSet = new Set([...indexArray]);
    if (indexSet.size === 3) {
      count++;
    }
  }
  return count;
};

// console.log(countGoodSubstring('xyzzaz'));
