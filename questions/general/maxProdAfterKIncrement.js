import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const maxProductAfterKIncrement = (nums, k) => {
  let minHeap = new MinPriorityQueue();
  let maxProd = 0;
  for (let num of nums) {
    minHeap.enqueue(num);
  }
  let counter = 0;
  while (counter < k) {
    let localProd = 1;
    for (let i = 1; i < nums.length; i++) {
      const currQVal = nums[i];
      nums[i] += currQVal + 1;
      localProd *= nums[i];
    }
    maxProd = Math.max(maxProd, localProd);
    counter++;
  }
  return maxProd;
};

//console.log(maxProductAfterKIncrement([6, 3, 3, 2], 2));
