const wordBreakTwoRetryII = (s, wordDict) => {
  let result = [];
  let cache = new Map();
  let set = new Set([...wordDict]);

  const dfs = (currIndex, subset) => {
    if (currIndex >= s.length) {
      result.push([...subset].join(' '));
      return true;
    }

    if (cache.has(currIndex) && !cache.get(currIndex)) {
      return cache.get(currIndex);
    }

    let foundPath = false; // default will be false

    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      if (set.has(slice)) {
        subset.push(slice);
        let foundValidPath = dfs(index + 1, subset);
        subset.pop(); // backtracking;
        foundPath = foundValidPath || foundPath;
      }
    }
    cache.set(currIndex, foundPath);
    return foundPath;
  };

  dfs(0, []);

  return result;
};

console.log(
  wordBreakTwoRetryII('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])
);
