const minCandy = (cost) => {
  if (cost.length < 3) {
    return cost.reduce((a, b) => a + b);
  }
  let minSum = 0;
  let count = 0;
  cost.sort((a, b) => b - a);

  for (let i = 0; i < cost.length; i++) {
    const currCost = cost[i];
    if (count === 2) {
      count = 0;
      continue;
    }
    count++;
    minSum += currCost;
  }
  return minSum;
};

console.log(minCandy([6, 5, 7, 9, 2, 2]));
