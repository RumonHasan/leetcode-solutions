const countVowelSubstrings = (word) => {
  let substringCount = 0;
  let vowels = 'aieou';
  for (let index = 0; index < word.length; index++) {
    let localWordSet = new Set();
    for (let secondIndex = index; secondIndex < word.length; secondIndex++) {
      if (vowels.includes(word[secondIndex])) {
        localWordSet.add(word[secondIndex]);
        localWordSet.size >= 5 && substringCount++;
      } else {
        break;
      }
    }
  }
  return substringCount;
};

//console.log(countVowelSubstrings('cuaieuouac'));
