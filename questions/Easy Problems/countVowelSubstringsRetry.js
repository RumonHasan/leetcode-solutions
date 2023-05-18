const countVowelSubstringsRetry = (word) => {
  let substringCount = 0;
  for (let index = 0; index < word.length; index++) {
    let vowelMap = new Map([
      ['a', 0],
      ['i', 0],
      ['e', 0],
      ['o', 0],
      ['u', 0],
    ]);
    for (let secondIndex = index; secondIndex < word.length; secondIndex++) {
      if (vowelMap.has(word[secondIndex])) {
        vowelMap.set(word[secondIndex], vowelMap.get(word[secondIndex]) + 1);
      } else {
        break;
      }
      const values = [...vowelMap.values()];
      const checkVals = values.some((val) => val === 0);
      !checkVals && substringCount++;
    }
  }

  return substringCount;
};
// generate subsrings and check
// string that contains all the vowels and calculate the number of substrings that contains all of them
//console.log(countVowelSubstringsRetry('cuaieuouac'));
