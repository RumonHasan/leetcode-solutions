const countBinarySubstrings = (s) => {
  let subCount = 0;
  const zero = '0';
  const one = '1';
  const expansionFunction = (left, right, leftVal, rightVal) => {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === leftVal &&
      s[right] === rightVal
    ) {
      subCount++;
      left--;
      right++;
    }
  };
  for (let index = 1; index < s.length; index++) {
    if (s[index] === one && s[index - 1] === zero) {
      subCount++;
      expansionFunction(index - 2, index + 1, zero, one);
    } else if (s[index] === zero && s[index - 1] === one) {
      subCount++;
      expansionFunction(index - 2, index + 1, one, zero);
    }
  }
  return subCount;
};

//console.log(countBinarySubstrings('00110011'));
