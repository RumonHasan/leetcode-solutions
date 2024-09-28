const reorgString = (s) => {
  let hash = {};
  let dp = new Array(s.length).fill('');
  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }
  let maxVal = 0;
  let maxChar = '';

  // getting max char and val
  for (let [key, value] of Object.entries(hash)) {
    if (value > maxVal) {
      maxVal = value;
      maxChar = key;
    }
  }
  let subIndex = 0;
  let maxCount = 0;
  // placing most frequent char in the dp
  for (let i = 0; i < dp.length; i += 2) {
    if (hash[maxChar] > 0) {
      dp[i] = maxChar;
      hash[maxChar] -= 1;
      maxCount++;
      if (hash[maxChar] === 0) delete hash[maxChar];
      subIndex = i;
    } else if (maxCount === maxVal) {
      break;
    }
  }
  if (hash[maxChar] > 0) return ''; // first case if all the max char cannot fit
  subIndex += 2;

  // placing the remaining chars in an alternative pattern
  for (let [key, value] of Object.entries(hash)) {
    while (hash[key] > 0) {
      subIndex = subIndex > dp.length - 1 ? 1 : subIndex;
      dp[subIndex] = key;
      hash[key] -= 1;
      subIndex += 2; // for alternating indices
      if (value === 0) delete hash[key];
    }
  }
  return dp.join('');
};

console.log(reorgString('ababbbaaa'));
