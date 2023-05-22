const similarStrings = (words) => {
  // brute force approach
  let pairCount = 0;
  const setStringConversion = (string) =>
    [...new Set([...string.split('')])].sort().join('');
  for (let index = 0; index < words.length; index++) {
    let mainSetString = setStringConversion(words[index]);
    for (
      let secondIndex = index + 1;
      secondIndex < words.length;
      secondIndex++
    ) {
      let checkSetString = setStringConversion(words[secondIndex]);
      if (checkSetString === mainSetString) {
        pairCount++;
      }
    }
  }
  return pairCount;
};

//console.log(similarStrings(['aba', 'aabb', 'abcd', 'bac', 'aabc']));

/*
ab
ba
bc
ca
cb
ac
*/
