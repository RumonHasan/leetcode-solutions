const longestPalindrome = (s) => {
  let hash = {};
  for (let char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  let lengthCounter = 0;
  let oddCheck = false;
  for (let [key, value] of Object.entries(hash)) {
    if (value % 2 === 1) {
      oddCheck = true;
    }
    if (value % 2 === 0) {
      lengthCounter += value;
    }
    if (value > 1 && value % 2 === 1) {
      let occurence = value - 1;
      lengthCounter += occurence;
    }
  }
  return oddCheck ? lengthCounter + 1 : lengthCounter;
};

//console.log(longestPalindrome('ccc'));
