const appendCharacters = (s, t) => {
  let tIndex = 0;
  for (let index in s) {
    if (s[index] == t[tIndex]) {
      tIndex++;
    }
  }
  let remainingTChar = t.slice(tIndex, t.length);
  return remainingTChar.length;
};
// return the minimum number of characters that needed to appended at the end of the string
// to return the subsequence validity

//console.log(appendCharacters('coaching', 'coding'));
