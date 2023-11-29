const maxCharRemoval = (s, p, removable) => {
  // checking for subsequence
  const bruteForceSlowApproach = () => {
    let indexSet = new Set();
    const checkSubstring = (string, checkString) => {
      let localIndex = 0;
      for (let index = 0; index < string.length; index++) {
        const char = string[index];
        if (char === checkString[localIndex] && !indexSet.has(index)) {
          localIndex++;
        }
      }
      if (localIndex === checkString.length) return true;
      return false;
    };
    let count = 0;
    for (let index = 0; index < removable.length; index++) {
      const removalIndex = removable[index];
      indexSet.add(removalIndex);
      if (checkSubstring(s, p)) {
        count++;
      }
    }
    return count;
  };
};

console.log(maxCharRemoval('abcacb', 'ab', [3, 1, 0]));
