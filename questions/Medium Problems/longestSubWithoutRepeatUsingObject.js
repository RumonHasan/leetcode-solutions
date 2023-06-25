const longestSubWithoutRepeatingUsingObject = (s) => {
  let hash = {};
  let longestLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    hash[s[end]] ? hash[s[end]]++ : (hash[s[end]] = 1);
    // reducing repeated characters
    while (hash[s[end]] > 1) {
      hash[s[start]]--;
      start++;
    }
    longestLength = Math.max(longestLength, end - start + 1);
  }
  return longestLength;
};

// goal is to find the longest substring without repeating characters using hash instead of map
//console.log(longestSubWithoutRepeatingUsingObject('abcabcbb'));
