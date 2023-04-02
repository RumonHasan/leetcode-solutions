const mostCommonWordProblem = (paragraph, banned) => {
  // filter the sentence
  let pararray = paragraph
    .toLowerCase()
    .replace(/[^a-z]/gi, ' ')
    .split(/[ ,]+/)
    .filter((word) => !banned.includes(word) && word !== '');
  let map = new Map();
  let occurence = 0;
  let result = '';
  for (let index in pararray) {
    const letter = pararray[index];
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
    if (occurence === 0 && result === '') {
      occurence = map.get(letter);
      result = letter;
    }
    if (map.get(letter) > occurence) {
      occurence = map.get(letter);
      result = letter;
    }
  }
  return result;
};

//console.log(mostCommonWordProblem('a, a, a, a, b,b,b,c, c', ['a']));
