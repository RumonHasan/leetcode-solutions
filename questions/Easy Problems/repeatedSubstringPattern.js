const repeatedSubstringPattern = (s) => {
  if (s.length === 1) return false;
  if (s.split('').every((letter) => letter === s[0])) {
    return true;
  }
  let pattern = '';
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    pattern += s[index];
    let repeatTurn = Math.floor(s.length / pattern.length);
    let afterRepeatString = pattern.repeat(repeatTurn);
    if (afterRepeatString.length === s.length && afterRepeatString === s) {
      return true;
    }
  }
  return false;
};

//console.log(repeatedSubstringPattern('abcabcabcabc'));
