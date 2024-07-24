const wordSubsets = (words1, words2) => {
  // getting total word letter collection with max occurence
  let globalMap = new Map();
  for (let word of words2) {
    let map = new Map();
    for (let letter of word) {
      map.set(letter, (map.get(letter) || 0) + 1);
    }
    for (let [key, value] of map) {
      if (globalMap.has(key)) {
        globalMap.set(key, Math.max(value, globalMap.get(key)));
      } else {
        globalMap.set(key, value);
      }
    }
  }
  let collection = [];
  for (let word of words1) {
    let check = true;
    let map = new Map();
    for (let letter of word) {
      map.set(letter, (map.get(letter) || 0) + 1);
    }
    for (let [key, value] of globalMap) {
      if (map.has(key) && map.get(key) < value) {
        check = false;
        break;
      } else if (!map.has(key)) {
        check = false;
        break;
      }
    }
    check && collection.push(word);
  }
  return collection;
};

console.log(
  wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
);
