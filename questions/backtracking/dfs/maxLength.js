const maxLengthOfUniqueStrings = (arr) => {
  let maxLength = 0;
  // function to check uniqueness
  const checkUnique = (str) => {
    let set = new Set();
    for (const char of str) {
      set.add(char);
    }
    return set.size === str.length;
  };
  const dfs = (currIndex, currSub) => {
    if (currIndex >= arr.length) {
      maxLength = Math.max(maxLength, currSub.length);
      return;
    }
    // include if its unique in a set
    if (checkUnique(currSub + arr[currIndex])) {
      dfs(currIndex + 1, currSub + arr[currIndex]);
    }
    // skip
    dfs(currIndex + 1, currSub);
  };

  dfs(0, '');
  return maxLength;
};

console.log(maxLengthOfUniqueStrings(['un', 'iq', 'ue']));
