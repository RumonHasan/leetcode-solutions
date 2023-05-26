const slowestKeyRetry = (releaseTimes, keysPressed) => {
  let dp = new Array(releaseTimes.length).fill(0);
  dp[0] = releaseTimes[0];
  for (let index = 1; index < releaseTimes.length; index++) {
    if (index >= 1) {
      let difference = releaseTimes[index] - releaseTimes[index - 1];
      dp[index] = difference;
    }
  }
  let maxPressedTime = Math.max(...dp);
  let letters = [];
  for (let index in releaseTimes) {
    if (dp[index] === maxPressedTime) {
      letters.push(keysPressed[index]);
    }
  }
  return letters.sort((a, b) => b.localeCompare(a))[0];
};

//console.log(slowestKeyRetry([9, 29, 49, 50], 'cbcd'));
