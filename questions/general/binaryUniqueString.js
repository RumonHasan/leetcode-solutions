const uniqueBinarySubstring = (nums) => {
  let set = new Set([...nums]);
  const dfs = (index, currString) => {
    // checking if the index is nums.length or not
    if (index === nums.length) {
      // limiting the length
      if (!set.has(currString)) {
        return currString;
      }
      return null; // triggering a backtracking here if string is formed but its present in the set
    }
    const result = dfs(index + 1, currString + '0');
    if (result) {
      return result;
    }
    return dfs(index + 1, currString + '1');
  };
  return dfs(0, '');
};

// intuition: to form every possible substrings that is size of nums length and getting the first unique one
//console.log(uniqueBinarySubstring(['000', '011', '001']));

const maxLengthOfConcatSub = (arr) => {
  const isUnique = (str) => {
    return new Set(str).size === str.length;
  };
  const dfs = (index, currString) => {
    // if it its the end of array then return the max length
    if (index === arr.length) {
      if (isUnique(currString)) {
        return currString.length;
      }
      return 0;
    }
    let dontTakeFirst = dfs(index + 1, currString);
    let take = 0;
    if (isUnique(currString + arr[index])) {
      // only take it if its unique
      take = dfs(index + 1, currString + arr[index]); // take the next element
    }
    return Math.max(dontTakeFirst, take);
  };

  return dfs(0, ''); // will return the largest value
};

// make sure to make the choice of either adding or not adding the every choice
//console.log(maxLengthOfConcatSub(['un', 'iq', 'ue']));
