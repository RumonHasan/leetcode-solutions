const pushDominoes = (dominoes) => {
  const initialTwoPointerApproach = () => {
    let left = new Array(dominoes.length).fill(0);
    let right = new Array(dominoes.length).fill(0);
    let dp = new Array(dominoes.length).fill('');
    // checking the right drop
    for (let index = 0; index < dominoes.length; index++) {
      if (index === dominoes.length - 1) {
        if (dominoes[index] === 'R') {
          right[index] = 1;
        }
        if (dominoes[index] === '.' && right[index - 1] > 0) {
          right[index] = right[index - 1] + 1;
        }
        continue;
      }
      if (dominoes[index] === 'R') {
        right[index] = 1;
        continue;
      }
      if (
        dominoes[index] === '.' &&
        right[index - 1] > 0 &&
        (dominoes[index + 1] === '.' || dominoes[index + 1] === 'R')
      ) {
        right[index] = right[index - 1] + 1;
      }
    }
    // checking for left side
    for (let index = dominoes.length - 1; index >= 0; index--) {
      if (index === 0) {
        if (dominoes[index] === 'L') {
          left[index] = 1;
        }
        if (dominoes[index] === '.' && left[index + 1] > 0) {
          left[index] = left[index + 1] + 1;
        }
        continue;
      }
      if (dominoes[index] === 'L') {
        left[index] = 1;
        continue;
      }
      if (
        dominoes[index] === '.' &&
        left[index + 1] > 0 &&
        (dominoes[index - 1] === '.' || dominoes[index - 1] === 'L')
      ) {
        left[index] = left[index + 1] + 1;
      }
    }
    console.log(left, right);
    // pattern matching
    for (let index = 0; index < dp.length; index++) {
      const leftVal = left[index];
      const rightVal = right[index];
      if (rightVal === leftVal) {
        dp[index] = '.';
      } else if (leftVal > rightVal) {
        dp[index] = 'L';
      } else {
        dp[index] = 'R';
      }
    }

    return dp.join('');
  };

  const forceApproach = () => {
    let force = 0;
    let dp = new Array(dominoes.length).fill(0);
    // from right to left
    for (let index = 0; index < dominoes.length; index++) {
      const domino = dominoes[index];
      if (domino === 'R') {
        force = dp.length;
      } else if (domino === 'L') {
        force = 0;
      } else if (domino === '.') {
        force = Math.max(force - 1, 0);
      }
      dp[index] += force;
    }
    // from left to right
    force = 0; // reassigning force to 0 for left to right traversal
    for (let index = dominoes.length - 1; index >= 0; index--) {
      const domino = dominoes[index];
      if (domino === 'L') {
        force = dp.length;
      } else if (domino === 'R') {
        // console.log(index);
        force = 0;
      } else {
        force = Math.max(force - 1, 0);
      }
      dp[index] -= force;
    }
    let resultDp = new Array(dominoes.length).fill('');
    for (let index = 0; index < dp.length; index++) {
      if (dp[index] > 0) {
        resultDp[index] = 'R';
      } else if (dp[index] < 0) {
        resultDp[index] = 'L';
      } else {
        resultDp[index] = '.';
      }
    }
    //console.log(dp);
    return resultDp.join('');
  };

  console.log(forceApproach());
};

// console.log(pushDominoes('R.......L.R.........'));

//"RRRR.LLLL.RRRRRRRRRR"

console.log(pushDominoes('R...R...L.R........L'));
