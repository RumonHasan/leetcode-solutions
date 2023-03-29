const isSubsequence = (s, t) => {
  let sLen = s.length;
  let counter = 0;
  let sIndex = 0;
  for (let index in t) {
    if (t[index] === s[sIndex]) {
      sIndex++;
      counter++;
    }
  }
  return counter === sLen;
};

//console.log(isSubsequence('abc', 'ahbgdc'));
