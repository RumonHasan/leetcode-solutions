const extraChars = (s, dictionary) => {
  let set = new Set([...dictionary]);
  let cacheDp = new Map();
  const searchDfs = (index) => {
    if (index === s.length) return 0; // base edge case
    // adding caches for similar paths
    if (cacheDp.has(index)) {
      return cacheDp.get(index);
    }
    // skipping character
    let skipOne = 1 + searchDfs(index + 1); // will have a value if there is a found result in the loop
    // checking for substring presence
    for (let j = index; j < s.length; j++) {
      const substring = s.slice(index, j + 1);
      // check if substring is present in the set or not
      if (set.has(substring)) {
        // skip to the next call while calculating the minimum
        skipOne = Math.min(skipOne, searchDfs(j + 1));
      }
    }
    cacheDp.set(index, skipOne); // adding the index and minimum skipped letters to map set;
    return skipOne;
  };

  return searchDfs(0);
};

// using dfs to calculate the result for with a skipped character and from teh starting charactaer itself...
console.log(extraChars('leetscode', ['leet', 'code', 'leetcode']));
