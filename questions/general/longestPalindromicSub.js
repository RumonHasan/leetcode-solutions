const longestPalindromicSub = (s) => {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    // odd expansion
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currStr = s.slice(left, right + 1);
      result = result.length > currStr.length ? result : currStr;
      left--;
      right++;
    }
    localArray = [];
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currStr = s.slice(left, right + 1);
      result = result.length > currStr.length ? result : currStr;
      left--;
      right++;
    }
  }
  return result;
};

console.log(longestPalindromicSub('babad'));
