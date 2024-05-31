const constructKPalindrome = (s, k) => {
  const array = s.split('');
  let map = new Map();
  if (s.length < k) return false;
  for (let char of array) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let oddCount = 0;
  for (let [_, value] of map) {
    if (value % 2 === 1) {
      oddCount++;
    }
    if (oddCount > k) {
      return false;
    }
  }
  return true;
};

//console.log(constructKPalindrome('leetcode', 2));
