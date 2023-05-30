const mostCommonWord = (paragraph, banned) => {
  const array = paragraph.split('');
  console.log(array);
  // checking char
  const checkChar = (char) => {
    if (typeof char !== 'string') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(char);
  };
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let letter = array[i].toLowerCase();
    let result = '';
    while (checkChar(letter) && i < array.length) {
      result += letter;
      i++;
    }
    newArray.push(result);
  }
  // removing banned words
  let postBannedWords = newArray.filter((word) => !banned.includes(word));
  let hash = {};
  for (let index in postBannedWords) {
    hash[postBannedWords[index]]
      ? hash[postBannedWords[index]]++
      : (hash[postBannedWords[index]] = 1);
  }
  // getting max words
  let maxIndex = 0;
  for (const [key, value] of Object.entries(hash)) {
    if (key !== '') {
      maxIndex = Math.max(value, maxIndex);
    }
  }
  for (let [key, value] of Object.entries(hash)) {
    if (maxIndex === value) {
      return key;
    }
  }
};

// console.log(
//   mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
//     '',
//   ])
// );
