// slower dfs recursive approach
const bestTeamScore = (scores, ages) => {
  // base sorted array formation
  let sorted = new Array(scores.length).fill(0);
  for (let index = 0; index < scores.length; index++) {
    const currScore = scores[index];
    const currAge = ages[index];
    sorted[index] = [currScore, currAge];
  }
  // sorting based on age
  sorted.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  console.log(sorted); // dfs function should get the maximum age starting from a current path then dfs tracking from that certain region
  const cache = Array(scores.length)
    .fill(null)
    .map(() => Array(100000).fill(-1));

  // main dfs function to extract the max sum
  const dfs = (currIndex, minScore) => {
    // base case if it exceeds the length then there is no ways to be explored so simply return 0
    if (currIndex >= sorted.length) {
      return 0;
    }
    // return the cached max sum from the currIndex max sum
    if (cache[currIndex][minScore] !== -1) {
      return cache[currIndex][minScore];
    }
    // skip current element
    let skipCurrent = dfs(currIndex + 1, minScore); // minscore
    let include = 0;

    // include current only when currScore is bigger than or equal to the minScore
    if (sorted[currIndex][0] >= minScore) {
      // include the current Score and update the new minScore
      include = sorted[currIndex][0] + dfs(currIndex + 1, sorted[currIndex][0]);
    }

    cache[currIndex][minScore] = Math.max(skipCurrent, include);
    return cache[currIndex][minScore];
  };

  return dfs(0, 0);
};

// this is more efficient approach given the contraints... as the dp is fixed and records the prefix iteration of the scores based on the previous numbers
const bottomUpDp = () => {
  const n = scores.length;

  // Create players array and sort
  const players = scores
    .map((score, i) => [score, ages[i]])
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  // dp[i] represents max score we can get ending at player i
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    dp[i] = players[i][0]; // At minimum, we can take this player alone

    // Check all previous players
    for (let j = 0; j < i; j++) {
      // If we can include both players (non-decreasing score order)
      if (players[j][0] <= players[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + players[i][0]);
      }
    }
  }

  return Math.max(...dp);
};
/**
 * THOUGHT PROCESS
 * Main key is to sort the scores and ages in a combined array then use skip and include dfs logic in order to find the maximum score
 * that can be attained where the scores are are non descending order
 * After sorting need to apply dfs to each path and keeping track of the min score in order to keep the increasing order of scores
 * Main dfs function will have caching to keep track of the maxScore from different paths
 */
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
