const longestIdealSub = (s, k) => {
  console.log(s);
  let dp = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const currCharCode = currChar.charCodeAt(0);
    for (let j = 0; j < i; j++) {
      const checkChar = s[j];
      const checkCharCode = checkChar.charCodeAt(0);
      if (Math.abs(currCharCode - checkCharCode) <= k) {
      }
    }
  }
};

console.log(longestIdealSub('acfgbd', 2));
