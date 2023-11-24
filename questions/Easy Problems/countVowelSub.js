const countVowelSubs = (word) => {
  console.log(word);
  let end = 0;
  let count = 0;
  while (end < word.length) {
    let hash = {
      a: 0,
      i: 0,
      e: 0,
      o: 0,
      u: 0,
    };
    // keep populating till you get the all vowels
    const mainChar = word[end];
    if (mainChar in hash) {
      for (let index = end; index < word.length; index++) {
        const char = word[index];
        if (char in hash) {
          hash[char]++;
        } else {
          break;
        }
        const valuesCheck = Object.values(hash).every((val) => val > 0);
        if (valuesCheck) {
          count++;
        }
      }
    }
    end++;
  }
  return count;
};

//console.log(countVowelSubs('cuaieuouac'));
