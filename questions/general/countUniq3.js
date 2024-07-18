const countPalindrome3 = (s) => {
  let map = new Map();
  let leftSet = new Set();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let res = new Set();
  for (let i = 0; i < s.length; i++) {
    const mid = s[i];
    map.set(mid, map.get(mid) - 1); // removing right side
    if (map.has(mid) && map.get(mid) === 0) map.delete(mid);
    // checking all letters
    for (let j = 97; j <= 122; j++) {
      const palLetter = String.fromCharCode(j);
      if (leftSet.has(palLetter) && map.has(palLetter)) {
        res.add(`${palLetter}${mid}${palLetter}`);
      }
    }
    if (!leftSet.has(mid)) {
      leftSet.add(mid);
    }
  }
  return res.size;
};

// get unique substring of len 3 palindromes
//console.log(countPalindrome3('bbcbaba'));
