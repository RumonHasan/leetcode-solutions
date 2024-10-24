"use strict";

var maxAssignProfit = function maxAssignProfit(difficulty, profit, worker) {
  // can be done with O logn and Olog m
  var calc = [];
  var maxProfit = 0;

  for (var i = 0; i < difficulty.length; i++) {
    var profitVal = profit[i];
    var diffLevel = difficulty[i];
    calc.push([diffLevel, profitVal]);
  }

  calc.sort(function (a, b) {
    return b[0] - a[0];
  });
  worker.sort(function (a, b) {
    return b - a;
  });
  var index = 0;

  while (index < worker.length) {
    var currWorker = worker[index];
    var localMaxProfit = 0;

    for (var _i = 0; _i < calc.length; _i++) {
      var currProfit = calc[_i][1];
      var currDiff = calc[_i][0];

      if (currDiff <= currWorker) {
        localMaxProfit = Math.max(currProfit, localMaxProfit);
      }
    }

    maxProfit += localMaxProfit;
    index++;
  }

  return maxProfit;
}; // console.log(
//   maxAssignProfit(
//     [68, 35, 52, 47, 86],
//     [67, 17, 1, 81, 3],
//     [92, 10, 85, 84, 82]
//   )
// );