"use strict";

var twoCitySchedule = function twoCitySchedule(costs) {
  var stack = [];
  var minCost = 0;
  var half = costs.length / 2;
  var counter = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = costs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cost = _step.value;
      var costA = cost[0];
      var costB = cost[1];
      var diff = costB - costA;
      stack.push({
        costs: [costA, costB],
        diff: diff
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  stack.sort(function (a, b) {
    return a.diff - b.diff;
  });
  var check = false;

  for (var i = 0; i < stack.length; i++) {
    var el = stack[i];

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
}; // preserving costs for even length


console.log(twoCitySchedule([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]));