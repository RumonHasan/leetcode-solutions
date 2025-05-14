const wordBreakII = (s, wordDict) => {
  let collection = [];
  let cache = new Map();
  let set = new Set([...wordDict]);

  // backtrack to collect all the collection from the wordict
  const backtrack = (currIndex, subSet) => {
    // base case
    if (currIndex >= s.length) {
      collection.push([...subSet].join(' ')); // join the word with space
      return true;
    }
    if (cache.has(currIndex)) {
      // caching the result of a single valid path
      return cache.get(currIndex);
    }
    let foundValidPath = false; // initial set valid path to false
    // forming all subset combinations
    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      // start dfs only when there is a starting slice present in word dict set
      if (set.has(slice)) {
        subSet.push(slice);
        let foundPossibleValidPath = backtrack(index + 1, subSet); // start from next variation
        subSet.pop(); // backtracking from the original recursive call spot to make sure to check for other paths
        foundValidPath = foundValidPath || foundPossibleValidPath;
      }
    }
    cache.set(currIndex, foundValidPath); // setting the path result in cache
    return foundValidPath;
  };

  backtrack(0, []);
  return collection;
};

console.log(
  wordBreakII('pineapplepenapple', [
    'apple',
    'pen',
    'applepen',
    'pine',
    'pineapple',
  ])
);
