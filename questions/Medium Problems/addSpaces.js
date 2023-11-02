const addSpaces = (s, spaces) => {
  const intuitiveApproach = () => {
    let dp = new Array(s.length + spaces.length).fill('');
    let addSpace = 0;
    for (let index = 0; index < spaces.length; index++) {
      dp[spaces[index] + addSpace] = ' ';
      addSpace++;
    }
    let sIndex = 0;
    for (let index = 0; index < dp.length; index++) {
      if (dp[index] === ' ') {
        continue;
      }
      dp[index] = s[sIndex];
      sIndex++;
    }
    return dp.join('');
  };
};

//console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));
