const bigram = (array) => {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      const pair = word.slice(j, j + 2);
      if (pair.length === 2) {
        if (hash[pair]) {
          hash[pair]++;
        } else {
          hash[pair] = 1;
        }
      }
    }
  }
  return hash;
};

// console.log(
//   bigram(['emma', 'olivia', 'ava', 'isabella', 'sophia', 'charlotte'])
// );
