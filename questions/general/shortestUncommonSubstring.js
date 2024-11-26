const shortestUncommonSubstring = (arr) => {
  let strMap = new Map();
  let dp = new Array(arr.length).fill('');
  // collect all the substrings
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    const index = i;
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
  // isolating the ones with single size
  let indexMap = new Map();
  for (const [key, value] of strMap) {
    if (value.size === 1) {
      const [index] = value;
      if (indexMap.has(index)) {
        const existingKey = indexMap.get(index);
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
  // populating result
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
