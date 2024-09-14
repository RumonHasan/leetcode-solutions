const wordBreak = (s, wordDict) => {
  let set = new Set([...wordDict]);
  let memo = new Map();

  const dfs = (startIndex) => {
    if (startIndex === s.length) {
      return true;
    }
    // if the starting path is true then it comes true or false
    if (memo.has(startIndex)) {
      return memo.get(startIndex);
    }
    for (let i = startIndex; i < s.length; i++) {
      const segment = s.slice(startIndex, i + 1);
      if (set.has(segment) && dfs(i + 1)) {
        memo.set(startIndex, true); // saving that found path // optional in this case since it will return true if its found
        return true;
      }
    }
    // adding if the path is not available
    memo.set(startIndex, false);
    return false;
  };

  return dfs(0);
};

// using dfs to check if the entire word is present or not and can be segmented
console.log(wordBreak('applepenapple', ['apple', 'pen']));
