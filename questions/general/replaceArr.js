const replaceArray = (arr) => {
  const bruteForceApproach = () => {
    let dp = new Array(arr.length).fill(0);
    dp[dp.length - 1] = -1;
    for (let i = 0; i < arr.length - 1; i++) {
      let currMax = -Infinity;
      for (let j = i + 1; j < arr.length; j++) {
        const currSubEl = arr[j];
        if (currMax < currSubEl) {
          currMax = currSubEl;
        }
      }
      dp[i] = currMax;
    }
    return dp;
  };

  // faster optimzied approach -- reverse order iteration
  const optimizedApproach = (arr) => {
    let dp = new Array(arr.length).fill(0);
    let currLargest = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      const currEl = arr[i];
      if (arr.length - 1 === i) {
        dp[i] = -1;
      }
      if (i < arr.length - 1) {
        dp[i] = currLargest;
        if (currLargest < currEl) {
          currLargest = currEl;
        }
      }
    }
    return dp;
  };

  //console.log(optimizedApproach([17, 18, 5, 4, 6, 1]));
};

// have to keep track of the upcoming next max element in order to populate the array
//console.log(replaceArray([17, 18, 5, 4, 6, 1]));
