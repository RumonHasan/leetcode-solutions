const stoneGameVII = (stones) => {
  const n = stones.length;
  const cache = Array(n)
    .fill(null)
    .map(() => Array(n).fill(-1));

  const prefixSum = [0];
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + stones[i];
  }

  const stoneSumCalculator = (left, right) => {
    if (left > right) return 0;
    return prefixSum[right + 1] - prefixSum[left];
  };

  const recurse = (left, right) => {
    if (cache[left][right] !== -1) {
      return cache[left][right];
    }
    if (left > right || left === right) {
      cache[left][right] = 0;
      return 0;
    }

    let maxDifference = -Infinity;

    let sumDifferenceLeft =
      stoneSumCalculator(left + 1, right) - recurse(left + 1, right);
    let sumDifferenceRight =
      stoneSumCalculator(left, right - 1) - recurse(left, right - 1);

    maxDifference = Math.max(sumDifferenceLeft, sumDifferenceRight);
    cache[left][right] = Math.max(sumDifferenceLeft, sumDifferenceRight);
    return cache[left][right];
  };
  return recurse(0, n - 1);
};

console.log(stoneGameVII([5, 3, 1, 4, 2]));
