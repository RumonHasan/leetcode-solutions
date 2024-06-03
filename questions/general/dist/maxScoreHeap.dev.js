"use strict";

var _priorityQueue = require("@datastructures-js/priority-queue");

// based on the three elements chosen
var maxScore = function maxScore(nums1, nums2, k) {
  var minHeap = new _priorityQueue.MinPriorityQueue();
  var maxSum = 0;
  var heapSum = 0;
  var sortedPairArray = nums1.map(function (item, index) {
    return [item, nums2[index]];
  }).sort(function (a, b) {
    return b[1] - a[1];
  });
  var newNums1 = sortedPairArray.map(function (item) {
    return item[0];
  });
  var newNums2 = sortedPairArray.map(function (item) {
    return item[1];
  });
  console.log(newNums1, newNums2);

  for (var i = 0; i < newNums1.length; i++) {
    var numOne = newNums1[i];
    heapSum += numOne;
    var currNumTwoMin = newNums2[i];
    minHeap.enqueue(numOne); // min heap implementation if the size is definite...

    if (minHeap.length > k) {
      heapSum -= minHeap.dequeue();
    } // logic for when counter is equal to k and possible reset;


    if (minHeap.length === k) {
      var sum = heapSum * currNumTwoMin;
      console.log(heapSum, currNumTwoMin);
      maxSum = Math.max(maxSum, sum);
    }

    console.log(minHeap);
  }

  return maxSum;
};

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));