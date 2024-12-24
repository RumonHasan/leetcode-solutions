const findLUSLength = (strs) => {
  // checks normal string against the target
  const checkUncommonSub = (str, target) => {
    let dp = [];
    for (let i = 0; i < str.length + 1; i++) {
      dp.push(new Array(target.length + 1).fill(0));
    }
    for (let i = dp.length - 2; i >= 0; i--) {
      for (let j = dp[i].length - 2; j >= 0; j--) {
        if (str[i] === target[j]) {
          dp[i][j] = dp[i + 1][j + 1] + 1;
        } else {
          dp[i][j] = dp[i][j + 1];
        }
      }
    }
    return dp[0].some((val) => val === str.length);
    // checking whether the first part of dp is found or not same as str target length
  };

  const LEN = strs.length;
  let maxLen = 0;
  for (let i = 0; i < LEN; i++) {
    const str = strs[i];
    if (i > 0 && strs[i - 1] === strs[i]) continue;
    if (i < LEN - 1 && strs[i + 1] === strs[i]) continue;

    let isSubCheck = false;
    for (let j = 0; j < LEN; j++) {
      const targetString = strs[j];
      if (i !== j && checkUncommonSub(str, targetString)) {
        isSubCheck = true; // stops iteration is the string has one set of validity
        break;
      }
    }
    if (!isSubCheck) {
      maxLen = Math.max(str.length, maxLen);
    }
  }

  return maxLen === 0 ? -1 : maxLen;
};

console.log(findLUSLength(['aaa', 'aaa', 'aa']));
