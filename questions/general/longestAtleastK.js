var longestSubstring = function (s, k) {
  const maxUnique = new Set(s).size;
  let maxLen = 0;
  console.log(s);

  for (let i = 1; i <= maxUnique; i++) {
    let hashMap = {},
      atLeastK = 0,
      uniqueCount = 0,
      left = 0;

    for (let right = 0; right < s.length; right++) {
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
      console.log(
        left,
        'set index-',
        i,
        'unique-',
        uniqueCount,
        'map-',
        hashMap,
        'atk-',
        atLeastK
      );
    }
  }

  return maxLen;
};

console.log(longestSubstring('ababbc', 2));
