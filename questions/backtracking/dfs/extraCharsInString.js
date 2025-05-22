const extraCharsInString = (s, dictionary) => {
  let set = new Set([...dictionary]);
  let cache = new Map();
  const dfs = (currIndex, currSub) => {
    if (currIndex >= s.length) {
      return 0;
    }
    if (cache.has(currIndex)) {
      // cache path
      return cache.get(currIndex);
    }
    let skipCurrent = 1 + dfs(currIndex + 1, currSub); //
    // include current
    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      if (set.has(slice)) {
        skipCurrent = Math.min(skipCurrent, dfs(index + 1, currSub + slice));
      }
    }
    cache.set(currIndex, skipCurrent);
    return skipCurrent;
  };

  return dfs(0, '');
};

console.log(extraCharsInString('leetscode', ['leet', 'code', 'leetcode']));
