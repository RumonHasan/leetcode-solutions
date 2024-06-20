import { MinPriorityQueue } from '@datastructures-js/priority-queue';
const largestAfterNegations = (nums, k) => {
  let minHeap = new MinPriorityQueue();
  for (let num of nums) {
    minHeap.enqueue(num);
  }
  let counter = 0;
  let total = 0;
  while (!minHeap.isEmpty()) {
    if (counter === k) break;
    let currMinValue = minHeap.dequeue().element;
    minHeap.enqueue(-currMinValue);
    counter += 1;
  }
  while (!minHeap.isEmpty()) {
    total += minHeap.dequeue().element;
  }
  return total;
};

//console.log(largestAfterNegations([3, -1, 0, 2], 3));
