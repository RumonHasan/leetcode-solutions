const printVerticlly = (s) => {
  let sArray = s.split(' ');
  let maxLen = 0;
  for (let index in sArray) {
    maxLen = Math.max(sArray[index].length, maxLen);
  }
  // adding trailing spaces
  for (let index in sArray) {
    if (sArray[index].length < maxLen) {
      const word = sArray[index];
      let requiredSpace = maxLen - word.length;
      // injecting space
      for (let i = 0; i < requiredSpace; i++) {
        sArray[index] += ' ';
      }
    }
  }
  let resultArray = new Array(maxLen).fill('');

  for (let i = 0; i < sArray.length; i++) {
    let word = sArray[i];
    let checkIndex = 0;
    for (let j = 0; j < word.length; j++) {
      resultArray[checkIndex] += word[j];
      checkIndex++;
    }
  }
  //removing trailing space
  for (let index in resultArray) {
    let checkSpace = false;
    for (let i = resultArray[index].length - 1; i >= 0; i--) {
      // checking for last letter
      if (
        resultArray[index][i] !== ' ' &&
        i === resultArray[index].length - 1
      ) {
        break;
      }
      // condition for with space
      if (resultArray[index][i] === ' ' && !checkSpace) {
        continue;
      }
      if (resultArray[index][i] !== ' ') {
        checkSpace = true;
      }
      if (checkSpace) {
        let slice = resultArray[index].slice(0, i + 1);
        resultArray[index] = slice;
        break;
      }
    }
  }

  return resultArray;
};

//console.log(printVerticlly('TO BE OR NOT TO BE'));
