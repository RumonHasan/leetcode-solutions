"use strict";

var minCandy = function minCandy(cost) {
  if (cost.length < 3) {
    return cost.reduce(function (a, b) {
      return a + b;
    });
  }

  var minSum = 0;
  var count = 0;
  cost.sort(function (a, b) {
    return b - a;
  });

  for (var i = 0; i < cost.length; i++) {
    var currCost = cost[i];

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