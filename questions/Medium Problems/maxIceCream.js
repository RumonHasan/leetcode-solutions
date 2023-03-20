const maxIceCreams = (costs, coins) => {
  let sortedCosts = costs.sort((a, b) => a - b);
  let totalCost = 0;
  let candyCounter = 0;
  for (let index in sortedCosts) {
    if (sortedCosts[index] <= coins) {
      totalCost += sortedCosts[index];
      if (totalCost > coins) {
        break;
      }
      candyCounter++;
      if (totalCost === coins) {
        break;
      }
    }
  }
  return candyCounter;
};

//console.log(maxIceCreams([7, 3, 3, 6, 6, 6, 10, 5, 9, 2], 56));
