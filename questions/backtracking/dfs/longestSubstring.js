const longestSubstring = (s, k) => {
  let map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let badChars = new Set();
  for (const [key, value] of map) {
    if (value < k) {
      badChars.add(key);
    }
  }
  // main base case to return the final length of the substring
  if (badChars.size === 0) {
    return s.length;
  }
  let segments = []; // segments after using the bad chars as partition split points
  let startSegmentIndex = 0;
  let maxLen = 0;
  // loop to parition to segments
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (badChars.has(currChar)) {
      const segment = s.slice(startSegmentIndex, i);
      // only add non empty segments
      if (segment.length > 0) {
        segments.push(segment);
      }
      startSegmentIndex = i + 1; // place the start segment after the ending point of the last partition
    }
  }
  // for last segments that does not have an ending bad chars
  const lastSegment = s.slice(startSegmentIndex);
  if (lastSegment.length > 0) {
    segments.push(lastSegment);
  }

  if (segments.length === 0) {
    // second base case where is no segment formed
    return 0;
  }
  for (let i = 0; i < segments.length; i++) {
    const currentSegment = segments[i];
    if (currentSegment.length) {
      maxLen = Math.max(maxLen, longestSubstring(currentSegment, k)); // stores the maxLen
    }
  }

  return maxLen;
};

// divide and conquer approach
console.log(longestSubstring('aaabbbccd', 3)); // answer will be 6
