const reverseStringII = (s, k) => {
  if (k > s.length) return s.split('').reverse().join('');
  // above is the egde case instead of k value is more string len;
  let array = s.split('');
  let endIndex = 0;
  let newString = '';
  while (endIndex < array.length) {
    const slice = array
      .slice(endIndex, endIndex + k)
      .reverse()
      .join('');
    const generalSlice = array.slice(endIndex + k, endIndex + 2 * k);
    newString += slice;
    newString += generalSlice.join('');
    endIndex += 2 * k;
  }
  return newString;
};

// console.log(reverseStringII('abcdefg', 2));
