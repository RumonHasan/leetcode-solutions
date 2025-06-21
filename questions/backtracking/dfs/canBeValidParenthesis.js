const canBeValidParenthesis = (s, locked) => {
  const cache = new Map();

  const dfs = (currIndex, openCount) => {
    const cacheKey = `${currIndex}-${openCount}`;

    if (currIndex >= s.length) {
      if (openCount === 0) {
        return true;
      }
      return false;
    }
    // too many open brackets cannot be closed all
    if (openCount > s.length - currIndex || openCount < 0) {
      return false;
    }
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    let result;

    // main dfs calls
    if (locked[currIndex] === '1') {
      const currBracket = s[currIndex] === '(';
      if (currBracket) {
        result = dfs(currIndex + 1, openCount + 1);
      } else {
        result = dfs(currIndex + 1, openCount - 1);
      }
    } else {
      result =
        dfs(currIndex + 1, openCount + 1) || dfs(currIndex + 1, openCount - 1);
    }

    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, 0);
};

console.log(canBeValidParenthesis('))()))', '010100'));
