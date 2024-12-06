const shortestUncommonSubstring = (arr) => {
  let strMap = new Map();
  let dp = new Array(arr.length).fill('');
  // collect all the substrings
  for (let strIndex in arr) {
    const string = arr[strIndex];
    const index = Number(strIndex);
    for (let j = 0; j < string.length; j++) {
      for (let k = j; k < string.length; k++) {
        const substring = string.slice(j, k + 1);
        if (strMap.has(substring)) {
          strMap.get(substring).add(index);
        } else {
          strMap.set(substring, new Set([index]));
        }
      }
    }
  }
  // isolating the ones with single size and injecting them with the appropriate indices
  let indexMap = new Map();
  for (const [key, value] of strMap) {
    if (value.size === 1) {
      const [index] = value;
      if (indexMap.has(index)) {
        const existingKey = indexMap.get(index);
        // sorted based on existing keys and localecomparison based on the lexicological order
        if (
          existingKey.length > key.length ||
          (existingKey.length === key.length && existingKey > key)
        ) {
          indexMap.set(index, key);
        }
      } else {
        indexMap.set(index, key);
      }
    }
  }
  // populating result based on the index set value
  for (const [key, value] of indexMap) {
    dp[Number(key)] = value;
  }
  return dp;
};

console.log(
  shortestUncommonSubstring([
    'gfnt',
    'xn',
    'mdz',
    'yfmr',
    'fi',
    'wwncn',
    'hkdy',
  ])
);

/*

substring_to_strings = {
    "c": {0, 3},
    "ca": {0},
    "cab": {0},
    "a": {0, 1, 2},
    "ab": {0},
    "b": {0, 2},
    "ba": {2},
    "bad": {2},
    "ad": {1, 2},
    "d": {1, 2}
}
*/
