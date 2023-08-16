const numSpecialEquivGroups = (words) => {
  // basic logic is get the even and odd chars of each word then just sort them out since the order is no longer a concern
  const checkWordAfterOddEvenTransformation = (word) => {
    let oddChars = [];
    let evenChars = [];
    for (let index = 0; index < word.length; index++) {
      if (index % 2 === 0) {
        evenChars.push(word[index]);
      } else {
        oddChars.push(word[index]);
      }
    }
    let resultString = `${oddChars.sort().join('')}${evenChars
      .sort()
      .join('')}`;
    return resultString;
  };

  let end = 0;
  let collectionMap = new Map();
  while (end < words.length) {
    let word = words[end].split('');
    let transformResult = checkWordAfterOddEvenTransformation(word);
    if (collectionMap.has(transformResult)) {
      collectionMap.get(transformResult).push(word);
    } else {
      collectionMap.set(transformResult, word);
    }
    end++;
  }
  return collectionMap.size;
};

// these are special equivalent strings
// console.log(
//   numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])
// );
