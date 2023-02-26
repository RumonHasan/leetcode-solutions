const toGoatLatin = (sentence) => {
  let finalString = '';
  const vowel = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
  };
  let sentenceArray = sentence.split(' ');
  const firstSegment = 'ma';
  for (let index = 0; index < sentenceArray.length; index++) {
    const word = sentenceArray[index];
    if (vowel[word[0].toLowerCase()]) {
      console.log(index);
      const newWord = word + firstSegment + ' ';
      finalString += newWord;
    } else {
      let firstLetter = word[0];
      const newWordConsonant = word.slice(1, word.length);
      let newWord = newWordConsonant + firstLetter + firstSegment + ' ';
      finalString += newWord;
    }
  }
  let pigLatinString = finalString.slice(0, -1);
  let array = pigLatinString.split(' ');
  let result = '';
  // adding the as
  for (let index in array) {
    let letter = 'a';
    let aCount = letter.repeat(Number(index) + 1);
    result += array[index] + aCount + ' ';
  }
  return result.slice(0, -1);
};

// console.log(toGoatLatin('I speak Goat Latin'));
