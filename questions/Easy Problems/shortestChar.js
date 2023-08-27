const shortestChar = (s, c) => {
  // one pass optimized solution using indexOf function
  const onePassOptimizedSolution = () => {
    let prevIndex = s.indexOf(c);
    let dp = new Array(s.length).fill(0);
    let nextIndex = prevIndex;
    let end = 0;
    while (end < s.length) {
      if (s[end] === c) {
        prevIndex = nextIndex;
        nextIndex = s.indexOf(c, prevIndex + 1);
      }
      const diffOne = Math.abs(prevIndex - end);
      const diffTwo = Math.abs(nextIndex - end);
      dp[end] = Math.min(diffOne, diffTwo);
      end++;
    }
    return dp;
  };

  //console.log(onePassOptimizedSolution());
};

//console.log(shortestChar('loveleetcode', 'e'));
