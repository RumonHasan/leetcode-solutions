const reverseOnlyLetters = (s) => {
  const checkLetter = (letter) => {
    if (typeof letter !== 'string') {
      return false;
    }
    return letter.toUpperCase() !== letter.toLocaleLowerCase();
  };
  let end = s.length;
  let start = 0;
  s = s.split('');
  while (start < end) {
    if (!checkLetter(s[start]) && !checkLetter(s[end])) {
      start++;
      end--;
    }
    if (checkLetter(s[start]) && !checkLetter(s[end])) {
      end--;
    }
    if (!checkLetter(s[start]) && checkLetter(s[end])) {
      start++;
    }
    if (checkLetter(s[start]) && checkLetter(s[end])) {
      let tempLetter = s[start];
      s[start] = s[end];
      s[end] = tempLetter;
      start++;
      end--;
    }
  }
  return s.join('');
};

//console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
//"j-Ih-gfE-dCba"
