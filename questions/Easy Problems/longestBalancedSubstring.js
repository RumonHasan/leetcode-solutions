const longestBalancedSubstring = (s) => {
  let maxLen = 0;
  if (s.split('').every((item) => item === '0')) return 0;
  if (s.split('').every((item) => item === '1')) return 0;
  for (let index = 0; index < s.length; index++) {
    let hash = {};
    for (let secondIndex = index; secondIndex < s.length; secondIndex++) {
      const slice = s.slice(index, secondIndex + 1);
      if (hash[s[secondIndex]]) {
        hash[s[secondIndex]]++;
      } else {
        hash[s[secondIndex]] = 1;
      }
      const hashString = '0'.repeat(hash['0']) + '1'.repeat(hash['1']);
      if (
        hashString == slice &&
        hashString.length > 1 &&
        hash['0'] === hash['1']
      ) {
        maxLen = Math.max(maxLen, slice.length);
      }
    }
  }
  return maxLen;
};

//console.log(longestBalancedSubstring('001'));
