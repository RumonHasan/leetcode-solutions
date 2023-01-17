const countSubstrings = (s) => {
  let substringCount = s.length; // default each char will be one substring
  for (let pivot = 0; pivot < s.length; pivot++) {
    let leftIndex = pivot - 1;
    let rightIndex = pivot + 1;
    // checking the odd substrings
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
      substringCount++;
    }
    // check for even values
    leftIndex = pivot;
    rightIndex = pivot + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
      substringCount++;
    }
  }
  return substringCount;
};

// finding all the palindromic substrings
//console.log(countSubstrings('aaaabbb'));
