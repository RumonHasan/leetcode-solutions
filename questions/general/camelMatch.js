const camelMatch = (queries, pattern) => {
  let result = [];
  const patternCreator = (pattern) => {
    let patternUpper = [];
    let str = pattern[0];
    for (let i = 1; i < pattern.length; i++) {
      if (pattern[i] === pattern[i].toUpperCase()) {
        patternUpper.push(str);
        str = '';
        str += pattern[i];
      } else {
        str += pattern[i];
      }
      if (i === pattern.length - 1) {
        patternUpper.push(str);
      }
    }
    return patternUpper;
  };
  const patternCheck = (patOriginal, checkPat) => {
    let patCount = 0;
    for (let pat of patOriginal) {
      let patIndex = 0;
      for (let patCheck of checkPat) {
        for (let patCheckLetter of patCheck) {
          if (
            pat[patIndex] &&
            pat[patIndex].toUpperCase() === pat[patIndex] &&
            patCheckLetter.toUpperCase() === patCheckLetter &&
            pat[patIndex] !== patCheckLetter
          ) {
            return false;
          }
          if (pat[patIndex] === patCheckLetter) {
            patIndex++;
          }
        }
      }
      if (patIndex === pat.length) {
        patCount++;
      }
    }
    return patCount === patOriginal.length;
  };

  let patternUpper = patternCreator(pattern);
  for (let query of queries) {
    let queryPattern = patternCreator(query);
    result.push(!patternCheck(patternUpper, queryPattern));
  }
  return result;
};

console.log(
  camelMatch(
    [
      'uAxaqlzahfialcezsLfj',
      'cAqlzyahaslccezssLfj',
      'AqlezahjarflcezshLfj',
      'AqlzofahaplcejuzsLfj',
      'tAqlzahavslcezsLwzfj',
      'AqlzahalcerrzsLpfonj',
      'AqlzahalceaczdsosLfj',
      'eAqlzbxahalcezelsLfj',
    ],
    'AqlzahalcezsLfj'
  )
);
