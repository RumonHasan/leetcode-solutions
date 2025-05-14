const concatenateWords = (words) => {
  let mainSet = new Set([...words]);
  let collection = [];

  // main backtracking function to check all the variation starting from a certain point of the recursive chain
  const backtrack = (
    currIndex,
    currWord,
    currSet,
    currWordCount,
    cache = new Map()
  ) => {
    // main base case
    if (currIndex >= currWord.length && currWordCount >= 2) {
      return true;
    }
    // cachiing only explores valid paths
    if (cache.has(currIndex) && !cache.get(currIndex)) {
      return cache.get(currIndex);
    }

    let foundValidPath = false; // to mark a default valid path

    // creating slices to check against the next series of words
    for (let index = currIndex; index < currWord.length; index++) {
      const currSlice = currWord.slice(currIndex, index + 1);

      if (currSet.has(currSlice)) {
        // if the word is found in the current set then we start the recursion process from here
        const foundPath = backtrack(
          index + 1,
          currWord,
          currSet,
          currWordCount + 1,
          cache
        );
        foundValidPath = foundPath || foundValidPath; // checking and updating a valid possible path
        if (foundValidPath) {
          // once a valid path is found u break out of the recursive loop here since no valid paths need to checked from here
          break;
        }
      }
    }

    cache.set(currIndex, foundValidPath); // stores the current valid path in the cache
    return foundValidPath;
  };

  // subiteration for checking each and every word as starting point
  for (const word of words) {
    mainSet.delete(word);

    // recursive call
    if (backtrack(0, word, mainSet, 0)) {
      collection.push(word);
    }

    // add back the word to recheck with other combinations
    mainSet.add(word);
  }

  return collection;
};

// need to recurse from every single word into finding possible combination chains and returning the original words that are atleast
// concatenation of two or more words
console.log(
  concatenateWords([
    'cat',
    'cats',
    'catsdogcats',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat',
  ])
);
