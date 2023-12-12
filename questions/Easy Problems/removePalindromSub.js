const removePalindromeSub = (s) => {
  console.log(s);
  const palindromeCheck = (string) => {
    for (let index = 0; index < string.length / 2; index++) {
      if (string[index] !== string[string.length - 1 - index]) {
        return false;
      }
    }
    return true;
  };
  console.log(palindromeCheck(s));
  if (palindromeCheck(s)) return 1;
  return 2;
};

console.log(removePalindromeSub('ababa'));
