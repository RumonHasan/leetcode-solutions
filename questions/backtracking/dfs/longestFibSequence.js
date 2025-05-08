const lengthOfLongestFibSequence = (arr) => {
  let set = new Set(); // set
  for (let num of arr) {
    set.add(num);
  }
  let cache = new Map(); // to store the result of count

  const dfs = (first, second) => {
    const cacheKey = `${first}-${second}`;

    // if the path is valid and there is already a series of fib array stored
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const next = first + second;
    if (set.has(next)) {
      const result = 1 + dfs(second, next); // so the second one becomes first and the next element becomes second;
      cache.set(cacheKey, result);
      return result;
    } else {
      cache.set(cacheKey, 1); // having one by default since the next element could be a start of another sequence
      return 1;
    }
  };

  // need to use two elements as a start in order to check
  let maxLength = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const first = arr[i];
      const second = arr[j];
      const length = 2 + dfs(first, second);
      if (length > 2) {
        maxLength = Math.max(maxLength, length);
      }
    }
  }

  return maxLength;
};

console.log(lengthOfLongestFibSequence([1, 2, 3, 4, 5, 6, 7, 8]));
