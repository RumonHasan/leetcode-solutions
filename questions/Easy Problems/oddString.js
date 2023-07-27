const oddString = (words) => {
  let map = new Map();
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let differencePair = [];
    for (let secondIndex = 1; secondIndex < word.length; secondIndex++) {
      const difference =
        word.charCodeAt(secondIndex) - word.charCodeAt(secondIndex - 1);
      differencePair.push(difference);
    }
    let differenceString = '';
    for (let index in differencePair) {
      differenceString += differencePair[index] + '-';
    }
    if (map.has(differenceString)) {
      map.get(differenceString).push(word);
    } else {
      map.set(differenceString, [word]);
    }
  }
  for (let [key, value] of map) {
    if (value.length === 1) {
      return value[0];
    }
  }
};

// console.log(oddString(['abm', 'bcn', 'alm']));
