const maximumRemovals = (s, p, removable) => {
  // correct approach but time limit exceeded
  const bruteForce = () => {
    let subCounter = 0;
    let indexSet = new Set();
    const checkSubsequence = (removeIndex) => {
      let sIndex = 0;
      let pIndex = 0;
      indexSet.add(removeIndex);
      while (sIndex < s.length && pIndex < p.length) {
        if (s[sIndex] === p[pIndex] && !indexSet.has(sIndex)) {
          pIndex++;
          sIndex++;
        } else {
          sIndex++;
        }
      }
      return pIndex === p.length;
    };
    for (let index = 0; index < removable.length; index++) {
      const removeIndex = removable[index];
      let check = checkSubsequence(removeIndex);
      if (check) subCounter++;
    }
    return subCounter;
  };
  //console.log(bruteForce());
};

//console.log(maximumRemovals('abcbddddd', 'abcd', [3, 2, 1, 4, 5, 6]));
