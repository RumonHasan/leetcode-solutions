const minimumDeleteSum = (s1, s2) => {
  const cache = new Map();

  // main dfs function
  const dfs = (indexOne, indexTwo) => {
    const cacheKey = `${indexOne}-${indexTwo}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // main base case no sum since reached 0
    if (indexOne === s1.length && indexTwo === s2.length) {
      return 0;
    }

    // return the sum of all other chars if one is depleted
    if (indexOne === s1.length) {
      let remainingSum = 0;
      for (let i = indexTwo; i < s2.length; i++) {
        const currCharValue = s2.charCodeAt(i);
        remainingSum += currCharValue;
      }
      return remainingSum;
    }

    // for the other char if indexTwo is depleted
    if (indexTwo === s2.length) {
      let remainingSum = 0;
      for (let i = indexOne; i < s1.length; i++) {
        const charVal = s1.charCodeAt(i);
        remainingSum += charVal;
      }
      return remainingSum;
    }

    // main dfs iteration functions will be called below
    let minSum = Infinity;

    // if characters are equal
    if (s1[indexOne] === s2[indexTwo]) {
      minSum = dfs(indexOne + 1, indexTwo + 1);
    } else {
      minSum = Math.min(
        s1.charCodeAt(indexOne) + dfs(indexOne + 1, indexTwo),
        s2.charCodeAt(indexTwo) + dfs(indexOne, indexTwo + 1)
      );
    }

    cache.set(cacheKey, minSum);
    return minSum;
  };

  return dfs(0, 0); // will return the final minimum sum value returned from the addition of the string code
};

// dfs memo approach for minimum delete sum by getting the character code
// goal is to get the minimum letter value sum after adding their sum
console.log(minimumDeleteSum('delete', 'leet'));
