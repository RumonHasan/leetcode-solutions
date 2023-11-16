const numSmallerByFreq = (queries, words) => {
  const dpCreator = (len) => {
    return new Array(len).fill(0);
  };
  let queryDp = dpCreator(queries.length);
  let wordsDp = dpCreator(words.length);
  const getLowestCharFrequency = (word) => {
    const sortedWord = word.split('').sort((a, b) => a.localeCompare(b));
    let frequency = sortedWord.lastIndexOf(sortedWord[0]) - 0 + 1;
    return frequency;
  };
  // query
  for (let index = 0; index < queries.length; index++) {
    queryDp[index] = getLowestCharFrequency(queries[index]);
  }
  for (let subIndex = 0; subIndex < words.length; subIndex++) {
    wordsDp[subIndex] = getLowestCharFrequency(words[subIndex]);
  }
  wordsDp.sort((a, b) => b - a);
  const primitiveSyntax = () => {
    for (let index = 0; index < queryDp.length; index++) {
      let query = queryDp[index];
      let counter = 0;
      for (let subIndex = 0; subIndex < wordsDp.length; subIndex++) {
        let wordFreq = wordsDp[subIndex];
        if (wordFreq > query) counter++;
      }
      queryDp[index] = counter;
    }
  };
  // changing the queryDp and accomodating for the new the occurence values based on word index
  const mapApproachButReducedSpeed = () => {
    queryDp.map((query, index) => {
      let counter = 0;
      wordsDp.map((wordFreq) => {
        if (wordFreq > query) counter++;
      });
      queryDp[index] = counter;
    });
  };

  return queryDp;
};

// comparing between the frequency of the smallest character in both the strings
// then adding how many are bigger in words compared to that of the query
console.log(
  numSmallerByFreq(
    [
      'bba',
      'abaaaaaa',
      'aaaaaa',
      'bbabbabaab',
      'aba',
      'aa',
      'baab',
      'bbbbbb',
      'aab',
      'bbabbaabb',
    ],
    [
      'aaabbb',
      'aab',
      'babbab',
      'babbbb',
      'b',
      'bbbbbbbbab',
      'a',
      'bbbbbbbbbb',
      'baaabbaab',
      'aa',
    ]
  )
);
