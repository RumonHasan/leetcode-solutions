const distinctSubsequences = (s, t) => {
  const cache = new Map();

  const dfs = (sIndex, tIndex) => {
    const cacheKey = sIndex * 1001 + tIndex;
    // base cases
    if (sIndex >= s.length && tIndex >= t.length) {
      // ran out of s chars
      return 1;
    }
    if (tIndex >= t.length) {
      // found a valid combination to form t
      return 1;
    }

    if (sIndex >= s.length && tIndex < t.length) {
      return 0;
    }

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // skip first
    let total = 0;
    total += dfs(sIndex + 1, tIndex);

    // include if equal
    if (s[sIndex] === t[tIndex]) {
      total += dfs(sIndex + 1, tIndex + 1);
    }

    cache.set(cacheKey, total);
    return total;
  };

  return dfs(0, 0);
};

console.log(distinctSubsequences('rabbbit', 'rabbit'));
