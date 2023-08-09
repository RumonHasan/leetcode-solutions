const printVerticallyRetry = (s) => {
  let array = s.split(' ');
  let maxLen = 0;
  for (let index in array) {
    maxLen = Math.max(array[index].length, maxLen);
  }
  let modifiedArray = [];
  for (let index in array) {
    let word = array[index];
    if (array[index].length < maxLen) {
      const spaceCounter = maxLen - word.length;
      modifiedArray.push((word += ' '.repeat(spaceCounter)));
    } else {
      modifiedArray.push(word);
    }
  }
  // vertical extract from the max Length getting the vertical alignment
  let result = [];
  let verticalMaxIndex = 0;
  while (verticalMaxIndex < maxLen) {
    let string = '';
    for (let index = 0; index < modifiedArray.length; index++) {
      const letter = modifiedArray[index][verticalMaxIndex];
      string += letter;
    }
    result.push(string.trimEnd());
    verticalMaxIndex++;
  }
  return result;
};

//console.log(printVerticallyRetry('CONTEST IS COMING'));
