const firstIndex = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    const currChar = haystack[i];
    if (currChar === needle[0]) {
      let startLen = i;
      const endLen = i + needle.length;
      let string = '';
      for (let j = startLen; j < endLen; j++) {
        string += haystack[j];
      }
      if (string === needle) {
        return startLen;
      }
    }
  }

  return -1;
};

console.log(firstIndex('mississippi', 'issip'));
