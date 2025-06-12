const minCostToBuyTickets = (days, costs) => {
  const cache = new Map();

  const dfs = (index) => {
    if (index >= days.length) {
      return 0;
    }

    if (cache.has(index)) {
      return cache.get(index);
    }
    // for 1 day
    let dayOne = costs[0] + dfs(index + 1);

    // for 7 days
    let nextIndex = index;
    while (nextIndex < days.length && days[nextIndex] < days[index] + 7) {
      // checking whether the current day value if bigger than current day plus 7 or not
      nextIndex++;
    }
    let daySeven = costs[1] + dfs(nextIndex);

    // for 30 days
    let next30Days = index;
    while (next30Days < days.length && days[next30Days] < days[index] + 30) {
      next30Days++;
    }

    let dayThirty = costs[2] + dfs(next30Days);

    let result = Math.min(dayOne, daySeven, dayThirty);
    cache.set(index, result);
    return result;
  };

  return dfs(0);
};

/* objective to get the min cost after adding the days to be covered costs
  skipping index for the number of days in order of 1,7,30 for days of tickets cost
*/
console.log(minCostToBuyTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
