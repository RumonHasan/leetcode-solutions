const findLongestChain = (pairs) => {
  // using dpCount to track the total count of larger pairs
  pairs.sort((a, b) => a[1] - b[1]); // sorting to fix the order
  let dpCount = new Array(pairs.length).fill(1);
  for (let i = 0; i < dpCount.length; i++) {
    const endPair = pairs[i];
    for (let j = 0; j < i; j++) {
      if (endPair[0] > currPair[1]) {
        // here just checking range and checking for longest icnreasing subsequence
        dpCount[i] = Math.max(dpCount[j] + 1, dpCount[i]); // updating the occurence in each individual places as a prefix sum
      }
    }
  }
  return Math.max(...dpCount);
};
console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5],
  ])
);
