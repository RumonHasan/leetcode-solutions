const wordSubsets = (words1, words2) => {
  let checkMap = {};
  for (let index in words2) {
    checkMap[words2[index]]
      ? checkMap[words2[index]]++
      : (checkMap[words2[index]] = 1);
  }
  let collection = [];
  for (let index = 0; index < words1.length; index++) {
    let word = words1[index];
    let checkHash = { ...checkMap };
    for (let secondIndex = 0; secondIndex < word.length; secondIndex++) {
      if (checkHash[word[secondIndex]]) {
        checkHash[word[secondIndex]]--;
      }
    }
    let checkHashState = Object.values(checkHash).every((val) => val === 0);
    if (checkHashState) {
      collection.push(word);
    }
  }
  return collection;
};
// on hold
// console.log(
//   wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['l', 'e'])
// );
