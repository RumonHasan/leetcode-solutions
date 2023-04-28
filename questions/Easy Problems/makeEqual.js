const makeEqual = (words) => {
  let hash = {};
  for (let word of words) {
    for (let index in word) {
      hash[word[index]] ? hash[word[index]]++ : (hash[word[index]] = 1);
    }
  }
  for (let [_, value] of Object.entries(hash)) {
    if (value % words.length === 1) return false;
    if (value % words.length > 0) {
      return false;
    }
  }
  return true;
};
// distribute the letters
// console.log(makeEqual(['ab', 'a']));
