const regularExpression = (s, p) => {
  const cache = new Map();

  // main dfs function to determin whether the pattern sequence tree is true or false
  const dfs = (indexOne, indexTwo) => {
    const cacheKey = `${indexOne}-${indexTwo}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // main base case if pattern still exists
    if (indexOne >= s.length) {
      // checking if the current char is not followed by a *
      for (let index = indexTwo; index < p.length; index += 2) {
        if (index + 1 >= p.length || p[index + 1] !== '*') {
          return false;
        }
      }
      return true;
    }

    //pattern is finished hence there is no path remaining
    if (indexTwo >= p.length) {
      return false;
    }
    let path = false;
    // if characters are equal or if one of them is a dot as it can turn into any other char
    if (indexTwo + 1 < p.length && p[indexTwo + 1] === '*') {
      // using zero times
      let zeroCheck = dfs(indexOne, indexTwo + 2);
      // using more than zero times
      let moreThanZeroCheck = false;
      if (
        indexOne < s.length &&
        indexTwo < p.length &&
        (p[indexTwo] === s[indexOne] || p[indexTwo] === '.')
      ) {
        moreThanZeroCheck = dfs(indexOne + 1, indexTwo);
      }

      path = zeroCheck || moreThanZeroCheck;
    } else if (s[indexOne] === p[indexTwo] || p[indexTwo] == '.') {
      path = dfs(indexOne + 1, indexTwo + 1);
    }

    cache.set(cacheKey, path);
    return path;
  };

  const result = dfs(0, 0);
  return result;
};

console.log(regularExpression('aa', 'a*'));
