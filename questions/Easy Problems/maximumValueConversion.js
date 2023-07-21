const maximumValueConversion = (strs) => {
  let end = 0;
  let maxLen = 0;
  while (end < strs.length) {
    const val = Number(strs[end]);
    const check = Number.isInteger(val);
    !check
      ? (maxLen = Math.max(maxLen, strs[end].length))
      : (maxLen = Math.max(maxLen, val));
    end++;
  }
  return maxLen;
};

//console.log(maximumValueConversion(['alic3', 'bob', '3', '4', '00000']));
