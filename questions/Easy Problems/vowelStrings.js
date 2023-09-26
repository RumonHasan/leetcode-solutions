const vowelStrings = (words, left, right) => {
  const basicIntuitiveApproach = () => {
    let vowelMap = new Map([
      ['a', true],
      ['i', true],
      ['e', true],
      ['o', true],
      ['u', true],
    ]);
    let counter = 0;
    for (let index = left; index <= right; index++) {
      const word = words[index];
      if (vowelMap.has(word[0]) && vowelMap.has(word[word.length - 1])) {
        counter++;
      }
    }
    return counter;
  };
};

// have to check in the inclusive range for  vowel strings
//console.log(vowelStrings(['are', 'amy', 'u'], 0, 2));
