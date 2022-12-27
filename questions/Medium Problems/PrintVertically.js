// leetcode 1324
// given a string return the words vertically in the same order
const printVertically = (s) => {
  let finalArray = [];
  const sArray = s.split(' ');
  // get the largest word
  let maxIndex = 0;
  for (let index in sArray) {
    maxIndex = Math.max(sArray[index].length, maxIndex);
  }
  // injecting trailing spaces by subtracting the extra length from the word
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i].length < maxIndex) {
      let spacesNeeded = maxIndex - sArray[i].length;
      for (let j = 0; j < spacesNeeded; j++) {
        sArray[i] += ' ';
      }
    }
  }
  // extracting the vertical patterns based on the max Index making sure that trailing space is removed
  for (let i = 0; i < maxIndex; i++) {
    let verticalWord = '';
    for (let j = 0; j < sArray.length; j++) {
      verticalWord += sArray[j][i];
    }
    finalArray.push(verticalWord);
  }

  // filtering final array by removing trailing spaces
  for (let i = 0; i < finalArray.length; i++) {
    if (finalArray[i][finalArray[i].length - 1] !== ' ') {
      continue;
    } else {
      let toggle = false;
      let string = new Array(finalArray[i].length).fill('');
      for (let j = finalArray[i].length - 1; j >= 0; j--) {
        if (!toggle && finalArray[i][j] === ' ') {
          continue;
        } else {
          toggle = true;
        }
        if (toggle) {
          string[j] = finalArray[i][j];
        }
      }
      finalArray[i] = string.join('');
    }
  }
  return finalArray;
};

//console.log(printVertically('CONTEST IS COMING'));
