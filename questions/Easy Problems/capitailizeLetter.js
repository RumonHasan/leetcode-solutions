const capitalizeTitle = (title) => {
  let titleArray = title.split(' ');
  let tempArray = [];
  let spaceCounter = titleArray.length - 1;
  for (let index = 0; index < titleArray.length; index++) {
    const word = titleArray[index];
    let uppercaseWord =
      word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
    if (word.length < 3) {
      tempArray.push(word.toLowerCase());
    } else {
      tempArray.push(uppercaseWord);
    }
  }
  let result = '';
  for (let index = 0; index < tempArray.length; index++) {
    if (spaceCounter > 0) {
      spaceCounter--;
      result += tempArray[index];
      result += ' ';
    } else {
      result += tempArray[index];
    }
  }
  return result;
};

//console.log(capitalizeTitle('capiTalIze tHe titLe'));
