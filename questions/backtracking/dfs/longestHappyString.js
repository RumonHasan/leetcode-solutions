const longestHappyString = (a, b, c) => {
  let cache = new Map();

  const dfs = (aCount, bCount, cCount, lastChar, repeatCount) => {
    // main base case where if all the count is 0 then return empty substring
    if (aCount === 0 && bCount === 0 && cCount === 0) {
      return '';
    }

    // cached key is formed using all the dfs params since the best result is dependent on each individual changing params
    const cacheKey = `${aCount}-${bCount}-${cCount}-${lastChar}-${repeatCount}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey); // cached substring
    }

    let result = ''; // will be returned as the longest possible result
    const letters = [
      ['a', aCount],
      ['b', bCount],
      ['c', cCount],
    ].sort((a, b) => b[1] - a[1]); // sorting to ensure we check from the highest order

    // need to try every letter combinations and reduce their repeat count and append char by char to the resultant substring
    for (const [char, count] of letters) {
      if (count === 0) continue; // if no letter present no point in continuing in the same recursive call chain

      // repeat count exceeds 2 we skip the iteration
      if (char === lastChar && repeatCount === 2) continue;

      // reducing the counts if the last chars are equal to the current char
      let newACount = aCount - (char === 'a' ? 1 : 0);
      let newBCount = bCount - (char === 'b' ? 1 : 0);
      let newCCount = cCount - (char === 'c' ? 1 : 0);

      // only update the repeat count if the last char is equivalent with the current char
      let newRepeatCount = lastChar === char ? repeatCount + 1 : 1;
      // recursive calls
      let currRecursiveResult = // char is added here to join with the original recursive call and form a new string
        char + dfs(newACount, newBCount, newCCount, char, newRepeatCount);
      // updating the resultant string only if the length is larger than the returned recursive call
      if (currRecursiveResult.length > result.length) {
        result = currRecursiveResult;

        // if highest count is found simply break
        if (count >= Math.max(newACount, newBCount, newCCount)) {
          break;
        }
      }
    }

    cache.set(cacheKey, result); // caching the result
    return result;
  };

  return dfs(a, b, c, '', 0);
};

// core logic: try out every letter in each recursive cycle then reduce the repeat count accordingly
console.log(longestHappyString(1, 1, 7));
