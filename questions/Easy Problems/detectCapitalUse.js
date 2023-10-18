const detectCapitalUse = (word) => {
  const intuitiveApproach = () => {
    const checkCapital = (char) => {
      if (char === char.toUpperCase()) {
        return true;
      }
      return false;
    };
    let capCounter = 0;
    let firstCapCheck = false;
    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      if (index === 0 && checkCapital(char)) {
        firstCapCheck = true;
        capCounter++;
        continue;
      }
      if (checkCapital(char)) {
        capCounter++;
      }
    }
    if (capCounter === 1 && firstCapCheck) return true;
    if (capCounter === word.length) return true;
    if (capCounter === 0) return true;

    return false;
  };
};

//console.log(detectCapitalUse('Leetcode'));
