const shortestCompletingWord = (licensePlate, words) => {
  const isLetter = (char) => {
    return /^[a-zA-Z]$/.test(char);
  };
  let array = licensePlate
    .split('')
    .filter((possible_letter) => isLetter(possible_letter))
    .map((letter) => letter.toLowerCase());
  let map = new Map();
  for (let char of array) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let collection = [];
  for (let word of words) {
    let word_map = new Map();
    let check = true;
    for (let letter of word) {
      word_map.set(letter, (word_map.get(letter) || 0) + 1);
    }
    for (let [key, value] of map) {
      if (!word_map.has(key)) {
        check = false;
        break;
      }
      if (word_map.has(key) && word_map.get(key) < value) {
        check = false;
        break;
      }
    }
    if (check) {
      collection.push(word);
    }
  }
  collection.sort((a, b) => a.length - b.length);
  return collection[0];
};

// console.log(
//   shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
// );
