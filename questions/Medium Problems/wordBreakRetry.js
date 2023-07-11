const wordBreak = (s, wordDict) => {
  const neetCodeSolution = () => {
    const dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;
    for (let i = s.length - 1; i >= 0; i--) {
      for (let j = 0; j < wordDict.length; j++) {
        const word = wordDict[j];
        const slice = s.slice(i, i + word.length);
        if (i + word.length <= s.length && slice === word) {
          dp[i] = dp[i + word.length];
        }
        if (dp[i]) {
          break;
        }
      }
    }
    return dp[0];
  };

  const mySolution = () => {
    let dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;
    for (let charIndex = s.length - 1; charIndex >= 0; charIndex--) {
      for (let index in wordDict) {
        let word = wordDict[index];
        const slice = s.slice(charIndex, charIndex + word.length);
        if (charIndex + word.length <= s.length && slice === word) {
          dp[charIndex] = dp[charIndex + word.length];
        }
        if (dp[0]) {
          break;
        }
      }
    }
    return dp[0];
  };

  console.log(mySolution());
};

console.log(wordBreak('dogs', ['dog', 's', 'gs']));
