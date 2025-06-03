const maxScoreWords = (words, letters, score) => {
  // initial letter count to check the counter
  let letterCount = new Map();
  for (const char of letters) {
    letterCount.set(char, (letterCount.get(char) || 0) + 1);
  }
  // caching the max value
  let cache = new Map();
  // function to calculate score based on the existing score array
  const scoreCalc = (char) => {
    return score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  };
  // main recursive function
  const dfs = (currIndex, currOcCount) => {
    // base case
    if (currIndex >= words.length) {
      return 0;
    }
    const cacheKey = `${currIndex}-${JSON.stringify(
      [...currOcCount.entries()].sort()
    )}`; // composite key for caching based on the current letters in the currOcCount
    // getting the cache max problem
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // skip the current word
    let skipCurrent = dfs(currIndex + 1, currOcCount); // completely skip current word
    let include = 0; // include the current word scores

    // get the current letter count of the current word
    let letterCountCurrWord = new Map();
    for (const char of words[currIndex]) {
      letterCountCurrWord.set(char, (letterCountCurrWord.get(char) || 0) + 1);
    }

    // compare with the current word count added with currOcCount and check with final letter count
    let canBreak = false;
    for (const [letter, value] of letterCountCurrWord) {
      if (
        value + (currOcCount.get(letter) || 0) > letterCount.get(letter) ||
        !letterCount.has(letter) // check only if there is an existing letter value and the total count is more
      ) {
        canBreak = true;
        break;
      }
    }
    // if not break adding
    if (!canBreak) {
      let newCount = new Map(currOcCount); // to update in the following dfs recursive call
      let localScore = 0;
      for (const [letter, value] of letterCountCurrWord) {
        newCount.set(letter, value + (currOcCount.get(letter) || 0));
        localScore += value * scoreCalc(letter); // only add the value of the current score of the letter
      }
      include = localScore + dfs(currIndex + 1, newCount);
    }

    // get the max and cache it
    let result = Math.max(include, skipCurrent);
    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, new Map()); // final max count will be returned
};

console.log(
  maxScoreWords(
    ['dog', 'cat', 'dad', 'good'],
    ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
