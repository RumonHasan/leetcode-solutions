const findLongestWord = (s, dictionary) => {
  let sMap = new Map();
  for (let index in s) {
    sMap.has(s[index])
      ? sMap.set(s[index], sMap.get(s[index]) + 1)
      : sMap.set(s[index], 1);
  }
  let collection = [];
  for (let word of dictionary) {
    let checkMap = new Map([...sMap]);
    let result = '';
    for (let index = 0; index < word.length; index++) {
      if (checkMap.get(word[index]) === 0) {
        checkMap.delete(word[index]);
        break;
      }
      if (checkMap.has(word[index])) {
        result += word[index];
        checkMap.set(word[index], checkMap.get(word[index]) - 1);
      }
    }
    if (result.length === word.length) {
      collection.push(result);
    }
  }
  collection = collection.filter(
    (word) => word.length === Math.max(...collection.map((word) => word.length))
  ); // filter out non-longest words
  collection.sort((a, b) => a.localeCompare(b)); // sort in smallest lexicological order
  return collection[0]; // return the first (smallest) word in the collection
};

console.log(
  findLongestWord('aewfafwafjlwajflwajflwafj', [
    'apple',
    'ewaf',
    'awefawfwaf',
    'awef',
    'awefe',
    'ewafeffewafewf',
  ])
);
