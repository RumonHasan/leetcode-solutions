const takeKChars = (s, k) => {
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  if (k === 0) return 0;
  if (map.size < 3) {
    return -1;
  }
  let minValue = Infinity;
  minValue = Math.min(minValue, ...[...map.values()]);
  if (minValue < k) {
    // since its three letters all of them have to be k or above
    return -1;
  }
  let end = 0;
  let start = 0;
  let max_sub_len = 0;

  while (end < s.length) {
    if (map.has(s[end])) {
      map.set(s[end], map.get(s[end]) - 1);
    }
    // if its less than k then increase the start to get to the center
    while (map.get(s[end]) < k) {
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) + 1);
      } else {
        map.set(s[start], 1);
      }
      start++;
    }
    max_sub_len = Math.max(end - start + 1, max_sub_len); // getting the center length to keep the external size aligned
    end++;
  }

  return s.length - max_sub_len;
};

// taking k chars from left and right most and seeing whether what is the mininum string that has atleast k chars of a b and c
console.log(takeKChars('aa', 2));
