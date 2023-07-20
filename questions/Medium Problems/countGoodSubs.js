const countGoodSubs = (s) => {
  let hash = {};
  let subSlice = s.slice(0, 3);
  for (let char of subSlice) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  let count = 0;
  if (Object.keys(hash).length === 3) count++;
  let end = 3;
  let start = 0;
  while (end < s.length) {
    hash[s[start]]--;
    if (hash[s[start]] === 0) {
      delete hash[s[start]];
    }
    start++;
    hash[s[end]] ? hash[s[end]]++ : (hash[s[end]] = 1);
    if (Object.keys(hash).length === 3) count++;
    end++;
  }
  return count;
};

//console.log(countGoodSubs('xyzzaz'));
