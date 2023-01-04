const maxNumberOfBalloons = (text) => {
  const targetText = 'balloon';
  let hash = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let index in text) {
    if (text[index] in hash) {
      hash[text[index]]++;
    }
  }
  let counter = 0;
  while (hash['b']) {
    let word = '';
    for (let i = 0; i < targetText.length; i++) {
      if (hash[targetText[i]]) {
        word += targetText[i];
        hash[targetText[i]]--;
      }
    }
    if (word === targetText) counter++;
  }
  return counter;
};

// console.log(maxNumberOfBalloons('loonbalxballpoon'));
// leetcode 1189
