"use strict";

var _priorityQueue = require("@datastructures-js/priority-queue");

var largestAfterNegations = function largestAfterNegations(nums, k) {
  var minHeap = new _priorityQueue.MinPriorityQueue();
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
  var total = 0;

  while (!minHeap.isEmpty()) {
    if (counter === k) break;
    var currMinValue = minHeap.dequeue().element;
    minHeap.enqueue(-currMinValue);
    counter += 1;
  }

  while (!minHeap.isEmpty()) {
    total += minHeap.dequeue().element;
  }

  return total;
}; //console.log(largestAfterNegations([3, -1, 0, 2], 3));