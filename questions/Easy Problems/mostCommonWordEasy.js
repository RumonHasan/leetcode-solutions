const mostCommonWordProblem = (paragraph, banned) => {
  // filter the sentence
  let pararray = paragraph
    .toLowerCase()
    .replace(/[^a-z]/gi, ' ')
    .split(/[ ,]+/)
    .filter((word) => !banned.includes(word) && word !== '');
  let map = new Map();
  for (let index in pararray) {
    const letter = pararray[index];
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  // using the max occurence to find the value
  const maxOccurence = Math.max.apply(Math, [...map.values()]);
  let result = '';
  for (let [key, value] of map) {
    if (value === maxOccurence) {
      result = key;
    }
  }
  return result;
};

//console.log(mostCommonWordProblem('a.', []));
