const replaceElements = (arr) => {
  const linearApproach = () => {
    // trying based on reverse iteration
    let dp = new Array(arr.length).fill(0);
    let leftIndex = arr.length - 1;
    let maxElement = arr[leftIndex];
    while (leftIndex >= 0) {
      const nextElement = arr[leftIndex + 1];
      if (leftIndex === arr.length - 1) {
        dp[leftIndex] = -1;
        leftIndex--;
      } else if (leftIndex < arr.length - 1) {
        // switching max if its bigger
        if (maxElement < nextElement) {
          maxElement = nextElement;
        }
        dp[leftIndex] = maxElement;
        leftIndex--;
      } else {
        leftIndex--;
      }
    }
    return dp;
  };

  //   console.log(linearApproach());
};

//console.log(replaceElements([17, 18, 5, 4, 6, 1]));
