const countSubstrings = (s) => {
  const count = s.length;
  const checkPal = (left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  };

  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    const oddCount = checkPal(left, right);
    left = i;
    right = i + 1;
    const evenCount = checkPal(left, right);
    count += oddCount + evenCount;
  }
  return count;
};

console.log(countSubstrings('abc'));
