const paintedHouseIII = (houses, cost, m, n, target) => {
  const cache = new Map();
  // main dfs recursive function
  const dfs = (currIndex, neighborhoodCount, prevColor) => {
    // return min sum from existing cached value
    const cacheKey = `${currIndex}-${neighborhoodCount}-${prevColor}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // primary base case
    if (currIndex === m) {
      if (neighborhoodCount === target) {
        // only returns 0 if it meets the target
        return 0;
      }
      return Infinity;
    }
    if (currIndex > m) {
      return 0;
    }
    if (neighborhoodCount > target) {
      return Infinity;
    }

    // main recursive function call for checking painted and unpainted houses
    let minCost = Infinity;
    // condition for already painted hence no cost incurred for painting it
    if (houses[currIndex] !== 0) {
      if (prevColor === houses[currIndex]) {
        minCost = dfs(currIndex + 1, neighborhoodCount, prevColor);
      } else {
        minCost = dfs(currIndex + 1, neighborhoodCount + 1, houses[currIndex]); // if its not equal then increase neighborhood count
      }
    } else if (houses[currIndex] === 0) {
      // checking for every color
      for (let i = 0; i < cost[currIndex].length; i++) {
        const currColorNumber = i + 1;
        const colorCost = cost[currIndex][i];

        const newNeighbordhoodCount =
          currColorNumber === prevColor
            ? neighborhoodCount
            : neighborhoodCount + 1;

        if (newNeighbordhoodCount <= target) {
          const totalColorCost =
            colorCost +
            dfs(currIndex + 1, newNeighbordhoodCount, currColorNumber); // using currColor number as the new prev Color
          minCost = Math.min(minCost, totalColorCost);
        }
      }
    }

    cache.set(cacheKey, minCost);
    return minCost;
  };
  const result = dfs(0, 0, 0);
  return result === Infinity ? -1 : result;
};

/** HARD PROBLEM
 * Minimum cost of paint all the unpainted house with targetted number of neihborhoods
 * Currindex -> represents the currindex of the house we are checking
 * neighborhoodCount -> counting the similar color neighborhoodCount
 * prevColor -> checking whether the prevColor of the neighborhood matches or not
 * Main target is to find the minimum cost taken to paint the total targetted number of neighborhoods
 * 0 -> not painted
 * 1 -> painted
 */
console.log(
  paintedHouseIII(
    [0, 0, 0, 0, 0],
    [
      [1, 10],
      [10, 1],
      [10, 1],
      [1, 10],
      [5, 1],
    ],
    5,
    2,
    3
  )
);
