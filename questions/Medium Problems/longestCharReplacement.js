const longestCharReplacement = (s, k) => {
  let maxLen = 0;
  let hash = {};
  let end = 0;
  let start = 0;
  while (end < s.length) {
    let char = s[end];
    hash[char] ? hash[char]++ : (hash[char] = 1);
    while (end - start + 1 - Math.max(...Object.values(hash)) > k) {
      hash[s[start]]--;
      if (hash[s[start]] === 0) {
        delete hash[s[start]];
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

//console.log(longestCharReplacement('AABABBA', 1));
