const findUniqueSub = (arr) => {
  // function to check whether the string has all unique characters or not
  const checkUnique = (str) => {
    let set = new Set();
    for (let char of str) {
      set.add(char);
    }
    return set.size === str.length;
  };

  // general df function to search and find all the unique strings and store them in the set
  const dfs = (currIndex, currString) => {
    // base case
    if (currIndex === arr.length) {
      // check if its unique then return the length or 0
      if (checkUnique(currString)) {
        return currString.length;
      }
      return 0;
    }

    const doesNotInclude = dfs(currIndex + 1, currString); // runs the dfs without including the first one
    let takeFirst = 0; // default of taking the first sequence
    const includedSubsequence = currString + arr[currIndex]; // included subsequence;
    // if its included then check for uniqueness then run the dfs
    if (checkUnique(includedSubsequence)) {
      // main core logic
      takeFirst = dfs(currIndex + 1, includedSubsequence); // runs the next subsequence by taking the first only if its unique
    }

    // will return the max length between the selected or unselected subsequence length
    return Math.max(takeFirst, doesNotInclude);
  };

  return dfs(0, ''); // final return will return the max unique subsequence after total dfs call traversal
};

// need to find maximum possible length of a unique subsequence that has all unique characters
console.log(findUniqueSub(['un', 'iq', 'ue']));
