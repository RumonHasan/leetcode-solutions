const decodeWays = (s) => {
  let cache = new Map();

  const dfs = (currIndex) => {
    if (currIndex === s.length) {
      return 1;
    }
    if (cache.has(currIndex)) {
      return cache.get(currIndex);
    }
    let result = 0;
    // take single
    if (s[currIndex] !== '0') {
      result += dfs(currIndex + 1);
    }
    // take pair
    if (currIndex + 1 < s.length) {
      const slice = parseInt(s.slice(currIndex, currIndex + 2));
      const pairCheck = slice >= 10 && slice <= 26;
      if (pairCheck) {
        result += dfs(currIndex + 2);
      }
    }

    cache.set(currIndex, result);
    return result;
  };

  return dfs(0);
};

console.log(decodeWays('226'));
