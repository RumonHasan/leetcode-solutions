// based on the three elements chosen
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// using in built priority queue data structures
const maxScore = (nums1, nums2, k) => {
  let minHeap = new MinPriorityQueue();
  let maxSum = 0;
  let heapSum = 0;
  // main key is to sort it here based on the second array in descending order while maintaining the index order connection to the first array
  let sortedPairArray = nums1
    .map((item, index) => [item, nums2[index]])
    .sort((a, b) => b[1] - a[1]);
  let newNums1 = sortedPairArray.map((item) => item[0]);
  let newNums2 = sortedPairArray.map((item) => item[1]);

  for (let i = 0; i < newNums1.length; i++) {
    const numOne = newNums1[i];
    heapSum += numOne;
    const currNumTwoMin = newNums2[i];
    minHeap.enqueue(numOne);
    // min heap implementation if the size is definite...
    if (minHeap.size() > k) {
      heapSum -= minHeap.dequeue();
    }
    // logic for when counter is equal to k and possible reset;
    if (minHeap.size() === k) {
      let sum = heapSum * currNumTwoMin;
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

//console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));
