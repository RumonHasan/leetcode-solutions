const uncommonFromSentences = (s1, s2) => {
  let map = new Map();
  let array = [...s1.split(' '), ...s2.split(' ')];
  for (let word of array) {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  }
  let collection = [];
  for (let [key, val] of map) {
    if (val === 1) {
      collection.push(key);
    }
  }
  return collection;
};

//console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
