const countHomogenous = (s) => {
  let counter = 0;
  const MOD = 1000000007;
  if (s.length === 1) return 1;
  const subCalculate = (n) => {
    return (n * ((n + 1) / 2)) % MOD;
  };

  let prevChar = s[0];
  let charCount = 1;

  for (let i = 1; i < s.length; i++) {
    const currChar = s[i];
    if (currChar === prevChar) {
      charCount++;
    } else {
      counter += subCalculate(charCount);
      charCount = 1;
      prevChar = currChar;
    }
    // last index check
    if (i === s.length - 1) {
      counter += subCalculate(charCount);
    }
  }

  return counter;
};

console.log(countHomogenous('abbcccaa'));
