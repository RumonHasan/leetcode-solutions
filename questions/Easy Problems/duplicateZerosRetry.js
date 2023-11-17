const duplicateRetryZeroes = (arr) => {
  const intuitiveApproach = () => {
    let zeroCounter = 0;
    arr.map((num) => num === 0 && zeroCounter++);
    let dp = new Array(arr.length + zeroCounter).fill(0);
    let end = 0;
    let numIndex = 0;
    while (end < dp.length) {
      if (arr[numIndex] !== 0) {
        dp[end] = arr[numIndex];
        end++;
        numIndex++;
      }
      if (arr[numIndex] === 0) {
        dp[end] = arr[numIndex];
        dp[end + 1] = arr[numIndex];
        numIndex++;
        end += 2;
      }
    }
    let newDp = dp.slice(0, dp.length - zeroCounter);
    for (let index in arr) {
      arr[index] = newDp[index];
    }
    return arr;
  };
};
//console.log(duplicateRetryZeroes([1, 0, 2, 3, 0, 4, 5, 0]));
