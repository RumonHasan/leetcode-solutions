"use strict";

var _priorityQueue = require("@datastructures-js/priority-queue");

var maxProductAfterKIncrement = function maxProductAfterKIncrement(nums, k) {
  var minHeap = new _priorityQueue.MinPriorityQueue();
  var maxProd = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      minHeap.enqueue(num);
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

  var counter = 0;

  while (counter < k) {
    var localProd = 1;

    for (var i = 1; i < nums.length; i++) {
      var currQVal = nums[i];
      nums[i] += currQVal + 1;
      localProd *= nums[i];
    }

    maxProd = Math.max(maxProd, localProd);
    counter++;
  }

  return maxProd;
}; //console.log(maxProductAfterKIncrement([6, 3, 3, 2], 2));