const balanceStringSplit = (s) => {
  let trackMap = new Map();
  let end = 0;
  let subCount = 0;
  let rCount = 0;
  let lCount = 0;
  while (end < s.length) {
    const char = s[end];
    if (rCount === lCount) {
      subCount++;
      rCount = 0;
      lCount = 0;
      trackMap.set('R', 0);
      trackMap.set('L', 0);
    }
    trackMap.set(char, (trackMap.get(char) || 0) + 1);
    rCount = trackMap.get('R');
    lCount = trackMap.get('L');
    end++;
  }
  return subCount;
};

//console.log(balanceStringSplit('RLRRRLLRLL'));
