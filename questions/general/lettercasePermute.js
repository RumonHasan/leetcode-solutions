const lettercasePermute = (s) => {
  let result = [];
  const isLetter = (char) => /^[a-zA-Z]$/.test(char); // regex to check whether its a letter or not
  // main dfs backtracking function
  const dfs = (currIndex, currSub) => {
    if (currIndex >= s.length) {
      // when the curr index reaches the index push it to the final result
      result.push(currSub);
      return;
    }
    // if its letter then apply double dfs for lower case and upper case
    if (isLetter(s[currIndex])) {
      // two options of sending upper and lower case
      const currSubstringLower = currSub + s[currIndex].toLowerCase();
      const currSubstringUpper = currSub + s[currIndex].toUpperCase();
      dfs(currIndex + 1, currSubstringLower);
      dfs(currIndex + 1, currSubstringUpper);
    } else {
      // if its a number then simply run the dfs on the next letter
      dfs(currIndex + 1, currSub + s[currIndex]);
    }
  };
  // starting the dfs function from the starting index of s string
  dfs(0, '');
  return result;
};

// two step dfs with passing two options for dfs one with capital letter and one with lowercase letter
console.log(lettercasePermute('a1b2'));
