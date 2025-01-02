const countVowelStrings = (words, queries) => {
  // general brute force tle concept where run time is O(n * q);
  const TLE = () => {
    // returns vowel based on boolean check
    const vowelCheck = (letter) => {
      return ['a', 'i', 'e', 'o', 'u'].some(
        (vowel) => letter.toLowerCase() === vowel
      );
    };
    // main function to check for vowel appearance
    const checkVowelAppearance = (array) => {
      let localCounter = 0;
      for (let word of array) {
        const first = word[0];
        const last = word[word.length - 1];
        if (vowelCheck(first) && vowelCheck(last)) localCounter++;
      }
      return localCounter;
    };

    let collection = []; // max length of collection will be same as queries length
    for (let query of queries) {
      const currWords = words.slice(query[0], query[1] + 1);
      const counter = checkVowelAppearance(currWords);
      collection.push(counter);
    }

    return collection;
  };

  // optimized approach O(n + q) run time
  const optimizedApproach = () => {
    let prefArray = [0];
    // letter vowel check function
    const vowelCheck = (letter) => {
      return ['a', 'i', 'e', 'o', 'u'].some(
        (vowel) => letter.toLowerCase() === vowel
      );
    };
    // getting the pref array in order to precompute the vowels
    for (let word of words) {
      const first = word[0];
      const last = word[word.length - 1];
      if (vowelCheck(first) && vowelCheck(last)) {
        prefArray.push(prefArray[prefArray.length - 1] + 1);
      } else {
        prefArray.push(prefArray[prefArray.length - 1]);
      }
    }
    let collection = [];
    // checking for the queries and getting the range
    for (let query of queries) {
      const [first, last] = query;
      collection.push(prefArray[last + 1] - prefArray[first]);
      // importance idea here to remember is that the prefix array has an addition value of 0 hence need to add an extra value to last in order to reset
    }
    return collection;
  };

  console.log(optimizedApproach());
};
// prefix sum optimization
console.log(
  countVowelStrings(
    ['aba', 'bcb', 'ece', 'aa', 'e'],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);
