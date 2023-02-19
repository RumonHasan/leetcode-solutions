const strstr = (haystack, needle) => {
  let index = 0;
  let finalIndex = -1;
  while (index < haystack.length) {
    if (haystack[index] === needle[0]) {
      const slice = haystack.slice(index, index + needle.length);
      if (slice === needle) {
        finalIndex = index;
        break;
      }
    }
    index++;
  }
  return finalIndex;
};

//console.log(strstr('ississippi', 'issip'));
