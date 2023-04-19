const groupAnagramsCheck = (strs) => {
  let collection = [];
  let map = new Map();
  for (let index = 0; index < strs.length; index++) {
    const word = strs[index];
    const wordFormat = strs[index]
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    if (map.has(wordFormat)) {
      map.get(wordFormat).push(word);
    } else {
      map.set(wordFormat, [word]);
    }
  }
  for (let [key, value] of map) {
    collection.push(value);
  }
  return collection;
};

//console.log(groupAnagramsCheck(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
