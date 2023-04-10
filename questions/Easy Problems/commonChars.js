const commonChars = (words) => {
  let remainWords = words.slice(1, words.length);
  let hash = {};
  for (let index in words[0]) {
    hash[words[0][index]]
      ? hash[words[0][index]][0]++
      : (hash[words[0][index]] = [1]);
  }
  for (let index = 0; index < remainWords.length; index++) {
    let word = remainWords[index];
    let localMap = new Map();
    for (let letter of word) {
      if (localMap.has(letter)) {
        localMap.set(letter, localMap.get(letter) + 1);
      } else {
        localMap.set(letter, 1);
      }
    }
    for (const [key, _] of Object.entries(hash)) {
      if (localMap.has(key)) {
        hash[key].push(localMap.get(key));
      }
    }
  }
  // final check
  let final = [];
  for (const [key, value] of Object.entries(hash)) {
    if (value.length === words.length) {
      final.push([key, Math.min(...value)]);
    }
  }
  let resultArray = [];
  for (let index in final) {
    for (let secondIndex = 0; secondIndex < final[index][1]; secondIndex++) {
      resultArray.push(final[index][0]);
    }
  }
  return resultArray;
};

//console.log(commonChars(['bella', 'label', 'roller']));
