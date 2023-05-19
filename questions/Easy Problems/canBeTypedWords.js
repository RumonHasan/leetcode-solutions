const canBeTypedWords = (text, brokenLetters) => {
  let array = text.split(' ');
  let brokenSet = new Set();
  let count = 0;
  for (let char of brokenLetters) {
    brokenSet.add(char);
  }
  for (let index = 0; index < array.length; index++) {
    let word = array[index];
    for (let letter of word) {
      if (brokenSet.has(letter)) {
        // subtracts the word count that has been found in the broken letter
        count--;
        break;
      }
    }
    count++;
  }
  return count;
};

//console.log(canBeTypedWords('hello world', 'ad'));
