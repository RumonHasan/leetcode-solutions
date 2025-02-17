const vowelSpellchecker = (wordlist, queries) => {
  let vowelMapper = new Map(); // mapping the vowel missing words as keys and adding real words as value
  let lowercaseMapper = new Map();
  let wordSet = new Set([...wordlist]); // for checking direct matching words
  let result = [];

  // function to replace vowel letters to check for common positioning
  const devowelWord = (word) => {
    let wordArray = word.toLowerCase().split('');
    const vowels = ['a', 'i', 'e', 'o', 'u', 'A', 'I', 'O', 'E', 'U'];
    const star = '*';
    for (let index in wordArray) {
      if (vowels.includes(wordArray[index])) {
        wordArray[index] = star;
      }
    }
    return wordArray.join('');
  };

  // populating the vowel mapper and capitalization word injection
  for (let word of wordlist) {
    const devoweledWord = devowelWord(word);
    if (!vowelMapper.has(devoweledWord)) {
      vowelMapper.set(devoweledWord, word);
    }
    const lowercaseWord = word.toLowerCase();
    if (!lowercaseMapper.has(lowercaseWord)) {
      lowercaseMapper.set(lowercaseWord, word);
    }
  }

  // to check against individual query and check for final checks
  const queryChecker = (query) => {
    // checking for exact word
    if (wordSet.has(query)) {
      return query;
    }
    // second condition to check (capitalization)
    const lowercaseQuery = query.toLowerCase();
    if (lowercaseMapper.has(lowercaseQuery)) {
      return lowercaseMapper.get(lowercaseQuery);
    }
    // third condition (vowel check)
    const devoweledQuery = devowelWord(lowercaseQuery);
    if (vowelMapper.has(devoweledQuery)) {
      return vowelMapper.get(devoweledQuery);
    }
    return '';
  };

  for (const query of queries) {
    result.push(queryChecker(query));
  }

  return result;
};

console.log(
  vowelSpellchecker(
    ['KiTe', 'kite', 'hare', 'Hare'],
    [
      'kite',
      'Kite',
      'KiTe',
      'Hare',
      'HARE',
      'Hear',
      'hear',
      'keti',
      'keet',
      'keto',
    ]
  )
);
