const checkValidString = (s) => {
  const cache = new Map();

  // checking for the open count and reducing accordingly if there is matching pair of brackets
  const dfs = (currIndex, openCount) => {
    const cacheKey = `${currIndex}-${openCount}`;
    if (currIndex >= s.length) {
      // main base case
      if (openCount === 0) {
        return true;
      }
      return false;
    }

    // if open count reduces beyond 0 then immediate return false
    if (openCount < 0) {
      return false;
    }

    // cached path
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // open bracket
    let include;
    if (s[currIndex] === '(') {
      include = dfs(currIndex + 1, openCount + 1);
    } else if (s[currIndex] === ')') {
      include = dfs(currIndex + 1, openCount - 1);
    } else {
      include =
        dfs(currIndex + 1, openCount + 1) ||
        dfs(currIndex + 1, openCount - 1) ||
        dfs(currIndex + 1, openCount);
    }

    cache.set(cacheKey, include);
    return include;
  };

  return dfs(0, 0);
};

// using dfs to solve whether there are balanced brackets or not... a single * can be treated as either empty open or closing bracket
console.log(checkValidString('(*))'));
