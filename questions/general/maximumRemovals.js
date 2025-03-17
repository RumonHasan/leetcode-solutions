const maximumRemovals = (s, p, removable) => {
  let maxRemovals = 0;
  let charArr = s.split('');
  // function to check for subsequence
  const isSubsequence = (removalIndex, string, checkString) => {
    // const removalIndexSet = new Set(removable.slice(0, removalIndex)); // checking a range from the starting to k
    let charCopy = [...charArr];
    for (let i = 0; i < removalIndex; i++) {
      // using a general for loop to remove the char
      charCopy[removable[i]] = ''; // empties the current index based on removable array to check for subsequence
    }
    let index = 0;
    for (let i = 0; i < charCopy.length; i++) {
      const currChar = charCopy[i];
      if (charCopy[i] !== '' && checkString[index] === currChar) {
        index++;
      }
      if (index === checkString.length) {
        break;
      }
    }
    return index === checkString.length;
  };

  let left = 0;
  let right = removable.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isSubsequence(mid, s, p)) {
      // if its true
      maxRemovals = Math.max(maxRemovals, mid); // if its found then explore larger sections
      left = mid + 1;
    } else {
      right = mid - 1; // if its not found explore smaller sections
    }
  }

  return maxRemovals;
};

console.log(maximumRemovals('abcacb', 'ab', [3, 1, 0]));
