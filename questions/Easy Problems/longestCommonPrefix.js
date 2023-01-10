const longestCommonPrefix = (string) => {
  let index = 0;
  let remainingStrings = string.slice(1, string.length);
  let finalString = '';
  let collection = [];
  // edge case
  while (index < string[0].length) {
    finalString += string[0][index];
    for (let i = 0; i < remainingStrings.length; i++) {
      if (remainingStrings[i].startsWith(finalString)) {
        continue;
      } else {
        finalString = '';
        break;
      }
    }
    collection.push(finalString);
    index++;
  }
  let maxLen = 0;
  //edge case
  if (collection[0] === '') return '';
  for (let index in collection) {
    maxLen = Math.max(collection[index].length, maxLen);
  }
  let result = collection.find((el) => el.length === maxLen);
  return result === undefined ? '' : result;
};

//console.log(longestCommonPrefix(['reflower', 'flow', 'flight']));
