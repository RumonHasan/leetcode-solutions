const checkZeroOnes = (s) => {
  // get zero count
  const getContinousCount = (checkChar) => {
    let localCount = 0;
    let maxCount = 0;
    for (let index in s) {
      let char = s[index];
      if (char === checkChar) {
        localCount++;
      } else {
        maxCount = Math.max(maxCount, localCount);
        localCount = 0;
      }
      if (Number(index) === s.length - 1) {
        maxCount = Math.max(maxCount, localCount);
      }
    }
    return maxCount;
  };

  let zeroCount = getContinousCount('0');
  let oneCount = getContinousCount('1');
  if (oneCount > zeroCount) {
    return true;
  } else {
    return false;
  }
};
// checking consequtive ones and zeroes and checking whether one is longer than the other or not
// then returning true or false based on that
//console.log(checkZeroOnes('110100010000'));
