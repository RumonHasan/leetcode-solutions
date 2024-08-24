"use strict";

var maximumUnits = function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort(function (a, b) {
    return b[1] - a[1];
  });
  var boxCount = 0;
  var total = 0;
  var exceedBox = [];

  for (var i = 0; i < boxTypes.length; i++) {
    var currBox = boxTypes[i][0];
    var currBoxItems = boxTypes[i][1];
    total += currBox * currBoxItems;
    boxCount += currBox;

    if (boxCount === truckSize) {
      return total;
    }

    if (boxCount > truckSize) {
      exceedBox = [currBox, currBoxItems];
      break;
    }

    if (i === boxTypes.length - 1) {
      return total;
    }
  }

  var extraBoxCount = (boxCount - truckSize) * exceedBox[1];
  return total - extraBoxCount;
};

console.log(maximumUnits([[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]], 35));