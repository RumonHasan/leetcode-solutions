const palindromicSubstrings = (s) => {
  let totalSubLen = s.length;

  for (let index = 0; index < s.length; index++) {
    // for odd palindromes
    let leftIndex = index - 1;
    let rightIndex = index + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
      totalSubLen++; //
    }
    // for even pairds
    leftIndex = index;
    rightIndex = index + 1;
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
      totalSubLen++;
    }
  }

  return totalSubLen;
};

//console.log(palindromicSubstrings('aaa'));
