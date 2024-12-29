const findMinArrowShots = (points) => {
  // sorting the points based on starting point
  const sortedPoints = points.sort((a, b) => a[0] - b[0]);
  let arrowCount = 1;
  let prevEnd = sortedPoints[0][1];
  // finding overlapping points
  for (let i = 1; i < sortedPoints.length; i++) {
    const [currStart, currEnd] = sortedPoints[i];
    if (currStart > prevEnd) {
      arrowCount++;
      prevEnd = currEnd;
    } else {
      // overlap exists then update with the minimum of prev end or current end
      prevEnd = Math.min(prevEnd, currEnd);
    }
  }
  return arrowCount;
};

// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ])
// );

// getting non overlapping intervals
const nonOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];

    // over lapping case
    if (stack.length && stack[stack.length - 1][1] > currInterval[0]) {
      const checkMinEnd = stack[stack.length - 1][1] < currInterval[1];
      if (!checkMinEnd) {
        stack.pop();
        stack.push(currInterval); // only push if the end is smaller than the prev end incase of overlap
      }
    } else {
      stack.push(currInterval);
    }
  }

  return intervals.length - stack.length;
};

console.log(
  nonOverlappingIntervals([
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4],
  ])
);

const maxProdOfThreeNumbers = (nums) => {
  // regular way
  let collection = [];
  // scenario 1 where its for all positive
  let copy = [...nums];
  for (let i = 0; i < 3; i++) {
    let maxIndex = 0;
    for (let j = 0; j < nums.length; j++) {
      const curr = nums[j];
      if (curr > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    collection.push(nums[maxIndex]);
    nums[maxIndex] = -Infinity;
  }
  const allPosVal = collection.reduce((acc, curr) => acc * curr, 1);
  // there could be negatives
  const minOne = Math.min(...copy);
  const minOneIndex = copy.indexOf(minOne);
  copy.splice(minOneIndex, 1);
  const minTwo = Math.min(...copy);
  const max = Math.max(...copy);
  const mixedVal = minTwo * max * minOne;

  return Math.max(mixedVal, allPosVal);
};

console.log(maxProdOfThreeNumbers([-100, -2, -3, 1]));
