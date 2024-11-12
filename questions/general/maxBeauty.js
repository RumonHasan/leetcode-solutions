const maxBeauty = (items, queries) => {
  let result = new Array(queries.length).fill(0);
  items.sort((a, b) => a[0] - b[0]);
  let sortedQueries = queries
    .map((query, index) => [query, index])
    .sort((a, b) => a[0] - b[0]);
  let maxBeauty = 0;

  let index = 0;
  for (let i = 0; i < sortedQueries.length; i++) {
    const query = sortedQueries[i][0];
    const queryIndex = sortedQueries[i][1];
    // needs to find the max beauty for each query starting from the query index
    while (index < items.length && items[index][0] <= query) {
      maxBeauty = Math.max(maxBeauty, items[index][1]); // keeping track of the max beauty
      index++;
    }
    result[queryIndex] = maxBeauty;
  }
  return result;
};

console.log(
  maxBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
);
