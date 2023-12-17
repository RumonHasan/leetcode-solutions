const fairCandySwap = (aliceSizes, bobSizes) => {
  const getSum = (arr) => arr.reduce((a, b) => a + b);
  let aSum = getSum(aliceSizes);
  let bSum = getSum(bobSizes);

  let delta = (bSum - aSum) / 2;
  let setA = new Set(aliceSizes);
  let setB = new Set(bobSizes);

  for (let candy of setA) {
    let checkCalc = delta + candy;
    if (setB.has(checkCalc)) {
      return [candy, checkCalc];
    }
  }
  return [];
};

// console.log(fairCandySwap([1, 1], [2, 2]));

const minimumCost = (cost) => {
  let sortedCost = cost.sort((a, b) => b - a);
  let end = 0;
  let minimumCost = 0;
  let limit = 0;
  while (end < cost.length) {
    if (limit === 2) {
      limit = 0;
    } else {
      const currentCost = sortedCost[end];
      minimumCost += currentCost;
      limit++;
    }
    end++;
  }
  return minimumCost;
};

//console.log(minimumCost([6, 5, 7, 9, 2, 2]));
