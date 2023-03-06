const needleHaystak = (haystack, needle) => {
  console.log(haystack, needle);
  let needleLen = needle.length;
  let start = 0;
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] == needle[start]) {
      const checkSlice = haystack.slice(index, index + needleLen);
      if (checkSlice == needle) {
        return index;
      }
    }
  }
  return -1;
};

//console.log(needleHaystak('butsad', 'sad'));
