const countTexts = (pressedKeys) => {
  let memo = new Map();
  let len = pressedKeys.length;
  const MOD = 1000000007;
  const maxPresses = {
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    8: 3, // abc, def, ghi, jkl, mno, tuv
    7: 4,
    9: 4, // pqrs, wxyz
  };

  const dfs = (currIndex) => {
    // main base case when a valid combination is found
    if (currIndex === len) {
      return 1;
    }

    // return previously preserved results
    if (memo.has(currIndex)) {
      return memo.get(currIndex);
    }

    const currKey = pressedKeys[currIndex];
    const maxPressed = maxPresses[currKey];
    let localResult = 0;

    for (let take = 1; take <= maxPressed; take++) {
      // take will be max of the number of times pressed and need to check
      // if the number of takes exceed the curr len then just break
      if (take + currIndex > len) {
        break;
      }

      let hasAllSameVal = true;
      // after the len is verified need to check whether the number of elements are similar or not
      for (let index = 0; index < take; index++) {
        // using currIndex + index calculation because all the digits have to be the same for dfs traversal
        if (pressedKeys[currIndex + index] !== currKey) {
          hasAllSameVal = false;
          break;
        }
      }

      if (hasAllSameVal) {
        localResult = (localResult + dfs(currIndex + take)) % MOD; // Apply MOD here
      }
    }

    memo.set(currIndex, localResult);
    return localResult;
  };

  return dfs(0);
};

/**
 * Base logic is to try each and every possible combination of numbers since any combination of numbers can form
 * a number of letters... so need to check how many letters can be taken from each and every take option using the maxPresses object
 */
console.log(countTexts('22233'));
