const maxBalloons = (text) => {
  let obj = {};
  const word = 'balloon';
  let counter = 0;
  for (let char of text) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  // since balloon starts with a b , you can use b as an entry point to check with the object
  // loop through the entire word and check and reduce the occurence from the object
  while (obj['b'] > 0) {
    let string = '';
    for (let word_char of word) {
      if (obj[word_char]) {
        string += word_char;
        obj[word_char]--;
      }
      if (obj[word_char] === 0) {
        delete obj[word_char];
      }
    }
    if (string == word) {
      counter += 1;
    }
  }
  return counter;
};

//console.log(maxBalloons('loonbalxballpoon'));
