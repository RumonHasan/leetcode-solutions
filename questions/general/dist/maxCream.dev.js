"use strict";

var maxIcecream = function maxIcecream(costs, coins) {
  var sortedCosts = costs.sort(function (a, b) {
    return a - b;
  });
  var total = 0;
  var counter = 0;

  for (var i = 0; i < sortedCosts.length; i++) {
    var currCost = sortedCosts[i];
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
}; //console.log(maxIcecream([1, 3, 2, 4, 1], 7));