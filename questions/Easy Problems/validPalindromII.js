const validPalindromeII = (s) => {
  const checkPalindrome = (leftIndex, rightIndex) => {
    while (leftIndex < rightIndex) {
      if (s.charAt(leftIndex) !== s.charAt(rightIndex)) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }
    return true;
  };
  for (let index = 0; index < s.length; index++) {
    if (s.charAt(index) !== s.charAt(s.length - 1 - index)) {
      return (
        // squeezes the array from both sides and reduces one
        checkPalindrome(index + 1, s.length - 1 - index) ||
        checkPalindrome(index, s.length - 2 - index)
      );
    }
  }
  return true;
};

//console.log(validPalindromeII('abca'));
