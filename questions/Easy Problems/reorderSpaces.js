const reorderSpaces = (text) => {
  console.log(text);
  // total spaces
  let totalSpaces = 0;
  for (let char of text) {
    if (char === ' ') {
      totalSpaces++;
    }
  }
  // word list
  let array = text.split(' ');
  let wordList = [];
  for (let word of array) {
    if (word !== '') {
      wordList.push(word);
    }
  }
  // spaces calculations
  let spaceRequired = Math.floor(totalSpaces / (wordList.length - 1));
  let spaceCalc = spaceRequired * (wordList.length - 1);
  let extraSpace = 0;
  if (spaceCalc < totalSpaces) {
    extraSpace = totalSpaces - spaceCalc;
  }

  console.log(spaceRequired, totalSpaces, extraSpace, wordList);

  // adding space
  for (let index = 0; index < wordList.length; index++) {
    let spaces = ' '.repeat(spaceRequired).split('').join('');
    wordList[index] += spaces;
  }
  let finalResult = wordList.join('');
  console.log(finalResult.split(''));
};

// console.log(reorderSpaces('  this   is  a sentence '));
