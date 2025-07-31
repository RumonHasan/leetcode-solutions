const shortestSuperseq = (str1, str2) => {
  const cache = new Map();

  // main dfs function to receive minimum string
  const dfs = (indexOne, indexTwo) => {
    // returning a string from the memo cache
    const cacheKey = `${indexOne}-${indexTwo}`; // setting a combined cache key of the designated path for both the string 1 and string 2
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // base case
    if (indexOne > str1.length || indexTwo > str2.length) {
      return '';
    }
    // if one of them finishes then return the remaining of the other parts from different strings as remaining characters
    if (indexOne >= str1.length) return str2.slice(indexTwo);
    if (indexTwo >= str2.length) return str1.slice(indexOne);
    const currCharOne = str1[indexOne];
    const currCharTwo = str2[indexTwo];
    let currStr = '';
    // if the char is equal then just add one char and skip both
    if (currCharOne === currCharTwo) {
      currStr += currCharOne + dfs(indexOne + 1, indexTwo + 1);
    } else {
      let currPathOne = currCharOne + dfs(indexOne + 1, indexTwo); // gets the curr char one then adds it
      let currPathTwo = currCharTwo + dfs(indexOne, indexTwo + 1); // gets the second char then adds it
      currStr =
        currPathOne.length > currPathTwo.length ? currPathTwo : currPathOne;
    }

    cache.set(cacheKey, currStr);
    return currStr;
  };

  return dfs(0, 0);
};

/**
 * Goal is to get the shortest super sequence that covers all the letters of the both the strings
 * And also remember the letters can be reused for one single word
 */
console.log(shortestSuperseq('abac', 'cab'));
