const arrangeWords = (text) => {
  let finalString = '';
  let array = text.split(' ');
  let sortedArray = array.sort((a, b) => a.length - b.length);
  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0) {
      let upperCase = sortedArray[i][0].toUpperCase();
      let remaining = sortedArray[i].slice(1, sortedArray[i].length);
      let newWord = upperCase + remaining;
      sortedArray[i] = newWord;
    } else {
      let upperCase = sortedArray[i][0].toLowerCase();
      let remaining = sortedArray[i].slice(1, sortedArray[i].length);
      let newWord = upperCase + remaining;
      sortedArray[i] = newWord;
    }
  }
  for (let index in sortedArray) {
    finalString += sortedArray[index] + ' ';
  }
  return finalString.slice(0, -1);
};

//console.log(arrangeWords('Code calm and keep on'));
