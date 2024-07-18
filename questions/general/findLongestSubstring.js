const findLongestSubstring = (s) => {
  const evenVowelCheck = (str) => {
    let map = new Map([
      ['a', 0],
      ['i', 0],
      ['e', 0],
      ['o', 0],
      ['u', 0],
    ]);
    for (let char of str) {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      }
    }
    let values = [...map.values()].every((val) => val % 2 === 0);
    return values;
  };
  // squeezing out the largest substring from left and right
  for (let i = s.length - 1; i >= 0; i--) {
    let start = 0;
    let end = i;
    while (end < s.length) {
      const slice = s.slice(start, end + 1);
      if (evenVowelCheck(slice)) return end - start + 1;
      end++;
      start++;
    }
  }
};

//console.log(findLongestSubstring('eleetminicoworoep'));
