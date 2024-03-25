const similarPairs = (words) => {
  let map = new Map();
  let count = 0;
  for (let word of words) {
    let set = new Set();
    for (let i = 0; i < word.length; i++) {
      let curr_letter = word[i];
      set.add(curr_letter);
    }
    let string = [...set].sort((a, b) => a.localeCompare(b)).join('');
    map.set(string, (map.get(string) || 0) + 1);
  }
  for (let [_, value] of map) {
    if (value > 1) {
      count += (value * (value - 1)) / 2;
    }
  }
  return count;
};

//console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']));
