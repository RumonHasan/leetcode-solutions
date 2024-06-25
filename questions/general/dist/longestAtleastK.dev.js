"use strict";

var longestSubstring = function longestSubstring(s, k) {
  var maxUnique = new Set(s).size;
  var maxLen = 0;
  console.log(s);

  for (var i = 1; i <= maxUnique; i++) {
    var hashMap = {},
        atLeastK = 0,
        uniqueCount = 0,
        left = 0;

    for (var right = 0; right < s.length; right++) {
      hashMap[s[right]] = hashMap[s[right]] + 1 || 1;
      if (hashMap[s[right]] === k) atLeastK++;
      if (hashMap[s[right]] === 1) uniqueCount++;

      while (uniqueCount > i) {
        console.log('check');
        if (hashMap[s[left]] === k) atLeastK--;
        hashMap[s[left]]--;
        if (hashMap[s[left]] === 0) uniqueCount--;
        left++;
      }

      if (uniqueCount === i && atLeastK === i) {
        maxLen = Math.max(maxLen, right - left + 1);
      }

      console.log(left, 'set index-', i, 'unique-', uniqueCount, 'map-', hashMap, 'atk-', atLeastK);
    }
  }

  return maxLen;
};

console.log(longestSubstring('ababbc', 2));