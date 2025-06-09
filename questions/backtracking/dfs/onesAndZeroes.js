const onesAndZeroes = (strs, m, n) => {
  let cache = new Map();

  const backtrack = (currIndex, currZeroes, currOnes) => {
    const cacheKey = `${currIndex}-${currZeroes}-${currOnes}`;
    // main base case
    if (currIndex >= strs.length) {
      // if no more substring to traverse then simply return 0
      return 0;
    }

    // return cached max value
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // skip the current substring and keep the current one count and zero count the same
    const skipCurrent = backtrack(currIndex + 1, currZeroes, currOnes);

    const [zeroes, ones] = getOnesAndZeroes(strs[currIndex]);
    let includeCurrent = 0;

    // need to check whether I can afford the current substring or not
    if (currZeroes >= zeroes && currOnes >= ones) {
      includeCurrent =
        1 + backtrack(currIndex + 1, currZeroes - zeroes, currOnes - ones);
    }

    const result = Math.max(skipCurrent, includeCurrent);
    cache.set(cacheKey, result);
    return result;
  };

  // function to extract one and zero count
  const getOnesAndZeroes = (str) => {
    let oneCount = 0;
    let zeroCount = 0;

    for (const char of str) {
      if (char === '0') {
        zeroCount++;
      } else if (char === '1') {
        oneCount++;
      }
    }
    return [zeroCount, oneCount];
  };

  return backtrack(0, m, n);
};

console.log(onesAndZeroes(['10', '0001', '111001', '1', '0'], 5, 3));
