"use strict";

var maxBeauty = function maxBeauty(items, queries) {
  var result = new Array(queries.length).fill(0);
  items.sort(function (a, b) {
    return a[0] - b[0];
  });
  var sortedQueries = queries.map(function (query, index) {
    return [query, index];
  }).sort(function (a, b) {
    return a[0] - b[0];
  });
  var maxBeauty = 0;
  var index = 0;

  for (var i = 0; i < sortedQueries.length; i++) {
    var query = sortedQueries[i][0];
    var queryIndex = sortedQueries[i][1]; // needs to find the max beauty for each query starting from the query index

    while (index < items.length && items[index][0] <= query) {
      maxBeauty = Math.max(maxBeauty, items[index][1]); // keeping track of the max beauty

      index++;
    }

    result[queryIndex] = maxBeauty;
  }

  return result;
};

console.log(maxBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]));