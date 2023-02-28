const arrangeWordsSentence = (text) => {
  let array = text.split(' ');
  let newArray = array.sort((a, b) => a.length - b.length);
  for (let index = 0; index < newArray.length; index++) {
    const word = newArray[index];
    if (index == 0) {
      let caps = word[0].toUpperCase();
      const remainingWord = word.slice(1, word.length);
      let newWord = caps + remainingWord;
      newArray[index] = newWord;
    } else {
      newArray[index] = newArray[index].toLowerCase();
    }
  }
  let finalString = '';
  for (let index in newArray) {
    finalString += newArray[index] + ' ';
  }
  return finalString.trimEnd();
};

//console.log(arrangeWordsSentence('Keep calm and code on'));
