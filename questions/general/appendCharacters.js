const appendCharacters = (s, t) => {
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < s.length) {
    const sChar = s[sIndex];
    const tChar = t[tIndex];
    if (sChar == tChar) {
      tIndex++;
    }
    sIndex++;
  }
  const remainingTSlice = t.slice(tIndex, t.length);
  return remainingTSlice.length;
};
console.log(appendCharacters('coaching', 'coding'));

const isSubsequence = (s, t) => {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    const sChar = s[index];
    if (sChar == tChar) {
      index++;
    }
  }

  return index === s.length ? true : false;
};

console.log(isSubsequence('abc', 'ahbgdc'));
