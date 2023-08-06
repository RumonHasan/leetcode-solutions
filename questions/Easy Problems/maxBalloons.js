const maxBalloons = (text) => {
  const word = 'balloon';
  let textHash = { a: 0, b: 0, o: 0, n: 0, l: 0 };
  for (let char of text) {
    if (char in textHash) {
      if (textHash[char]) {
        textHash[char]++;
      } else {
        textHash[char] = 1;
      }
    }
  }
  let counter = 0;
  while (textHash['b'] > 0) {
    let string = '';
    for (let index = 0; index < word.length; index++) {
      if (textHash[word[index]] === 0) {
        delete textHash[word[index]];
      }
      if (textHash[word[index]]) {
        string += word[index];
        textHash[word[index]]--;
      }
    }
    if (string === word) {
      counter++;
    }
  }
  return counter;
};

//console.log(maxBalloons('balon'));
