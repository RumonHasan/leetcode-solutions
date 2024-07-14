const maxIcecream = (costs, coins) => {
  const sortedCosts = costs.sort((a, b) => a - b);
  let total = 0;
  let counter = 0;
  for (let i = 0; i < sortedCosts.length; i++) {
    const currCost = sortedCosts[i];
    total += currCost;
    counter++;
    if (total === coins) {
      break;
    }
    if (total > coins) {
      counter -= 1;
      break;
    }
  }
  return counter;
};

//console.log(maxIcecream([1, 3, 2, 4, 1], 7));
