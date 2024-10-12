const subset = (words1, words2) => {
  let bigMap = new Map(); // will contain the largest frequency of every char from words2
  for (let word of words2) {
    let map = new Map();
    for (let char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (let [key, value] of map) {
      if (value > bigMap.get(key) && bigMap.has(key)) {
        bigMap.set(key, value);
      }
      if (!bigMap.has(key)) {
        bigMap.set(key, value);
      }
    }
  }
  // checking with words1
  let collection = [];
  for (let word of words1) {
    let map = new Map();
    let check = true;
    for (let char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (let [key, value] of bigMap) {
      if (!map.has(key) || (map.has(key) && map.get(key) < value)) {
        check = false;
        break;
      }
    }
    if (check) {
      collection.push(word);
    }
  }
  return collection;
};

//get the max of every letter from every word then store it in a global map of words2
console.log(
  subset(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
);
