const checkString = (s) => {
  let aCount = 0;
  s.split('').reduce((acc, curr) => curr === 'a' && aCount++, 0);
  let checkCount = 0;
  for (let char of s) {
    if (char === 'a') {
      checkCount++;
    } else {
      break;
    }
  }
  return checkCount === aCount;
};

// console.log(checkString('aaabbb'));
