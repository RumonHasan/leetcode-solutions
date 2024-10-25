const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  let wordOneSet = new Set(word1);
  let wordTwoSet = new Set(word2);
  // checking whether they have the same letters or not
  for (let char of wordOneSet) {
    if (!wordTwoSet.has(char)) return false;
  }
  const getOc = (string) => {
    let map = new Map();
    for (let char of string) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return [...map.values()].sort((a, b) => a - b);
  };
  // permutations of occurence should be same
  let valOne = getOc(word1);
  let valTwo = getOc(word2);

  // sorting frequencies to check whether they are same or not
  for (let i = 0; i < valOne.length; i++) {
    if (valOne[i] !== valTwo[i]) return false;
  }
  return true;
};

// remember the characters have to be mutual and exisitng in both
//console.log(closeStrings('abbzzca', 'babzzcz'));
// all the prefix have to be present
const longestWord = (words) => {
  words.sort((a, b) => a.length - b.length);
  let set = new Set(words);
  let collection = [];
  let lng = 0;
  for (let word of words) {
    let prefString = '';
    let check = true;
    for (let char of word) {
      prefString += char;
      if (!set.has(prefString)) {
        check = false;
        break;
      }
    }
    if (check) {
      collection.push(word);
      lng = Math.max(lng, word.length);
    }
  }

  collection.sort((a, b) => b.length - a.length);
  let res = [];
  for (let word of collection) {
    if (word.length === lng) {
      res.push(word);
    } else {
      break;
    }
  }
  res.sort((a, b) => a.localeCompare(b));
  return res[0] === undefined ? '' : res[0];
};

console.log(
  longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
);
s