const twoCitySchedule = (costs) => {
  let stack = [];
  let minCost = 0;
  let half = costs.length / 2;
  let counter = 0;
  for (let cost of costs) {
    let costA = cost[0];
    let costB = cost[1];
    let diff = costB - costA;
    stack.push({
      costs: [costA, costB],
      diff,
    });
  }
  stack.sort((a, b) => a.diff - b.diff);
  let check = false;
  for (let i = 0; i < stack.length; i++) {
    const el = stack[i];
    if (!check) {
      minCost += el.costs[1];
      counter++;
      if (counter === half) check = true;
      continue;
    }
    if (check) {
      minCost += el.costs[0];
    }
  }
  return minCost;
};

// preserving costs for even length
console.log(
  twoCitySchedule([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
