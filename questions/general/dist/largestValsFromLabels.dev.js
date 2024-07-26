"use strict";

var largestValsFromLabels = function largestValsFromLabels(values, labels, numWanted, useLimit) {
  var maxSum = 0;
  var labelMap = new Map();
  var labelArray = values.map(function (value, index) {
    return {
      value: value,
      label: labels[index]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }); // keeping the count of the labels and seeing whether they exceed the useLimit or not with each iteration

  var totalItems = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = labelArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var currLabel = _step.value;
      //
      var currVal = currLabel.value;
      var currLabelVal = currLabel.label;
      var currLabelCount = labelMap.get(currLabelVal) || 0; // gets current Val or 0 for incrementing
      // checking for count and comparing it with useLimit in order to get the value count

      if (currLabelCount < useLimit && totalItems < numWanted) {
        maxSum += currVal;
        labelMap.set(currLabelVal, currLabelCount + 1); // increases the current labelCount here to keep in check

        totalItems++;
      }
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

  return maxSum;
}; // num limit is numwanted and cannot exceed that
//console.log(largestValsFromLabels([2, 6, 3, 6, 5], [1, 1, 2, 1, 1], 3, 1));