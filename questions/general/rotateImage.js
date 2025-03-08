const rotateImage = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  // transposing layer
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (i < j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  // reversing the rows
  for (let i = 0; i < ROWS; i++) {
    const currRow = matrix[i].reverse();
    matrix[i] = currRow;
  }

  return matrix;
};

// rotating images using transposing layers and then switching the matrix rows in order to create the final matrix formation...
console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// getting minimum recolors for black balls of k consequtive order
const minimumRecolors = (blocks, k) => {
  const white = 'W';
  let whiteCounter = 0;
  let minCount = Infinity;

  for (let i = 0; i < k; i++) {
    const currBlock = blocks[i];
    if (currBlock === white) {
      whiteCounter++;
    }
  }
  minCount = Math.min(minCount, whiteCounter); // using white counter as the main tracking path

  let end = k;
  let start = 0;

  while (end < blocks.length) {
    const startBlock = blocks[start];
    const currBlock = blocks[end];

    if (startBlock === white) {
      whiteCounter--;
    }

    if (currBlock === white) {
      whiteCounter++;
    }

    minCount = Math.min(minCount, whiteCounter);

    end++;
    start++;
  }

  return minCount;
};

//console.log(minimumRecolors('WBBWWBBWBW', 7));

// getting longest consequtive ones with k flips of zero
const longestOnes = (nums, k) => {
  let zeroCounter = 0;
  let longestLen = 0;
  let end = 0;
  let start = 0;

  while (end < nums.length) {
    if (nums[end] === 0) {
      zeroCounter++;
    }

    while (zeroCounter > k) {
      if (nums[start] === 0) {
        zeroCounter--;
      }
      start++;
    }

    longestLen = Math.max(longestLen, end - start + 1);

    end++;
  }

  return longestLen;
};

//console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// getting the shortest unsorted subarray that when extended it is the min length
const shortestUnsortedSubarray = (nums) => {
  let points = [
    { index: null, num: null },
    { index: null, num: null },
  ]; // will contain i and j for extension
  let startBool = false;
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    // gettting the start point
    if (curr < prev && !startBool) {
      points[0].num = prev;
      points[0].index = i - 1;
      startBool = true;
    }

    // getting the end point and it keeps updating based on future finds
    if (curr > prev && startBool) {
      points[1].index = i - 1;
      points[1].num = prev;
    }
  }
  if (points[1].index === null || points[0].index === null) return 0;
  // extending from the points i and j rows to check for more combinations subarray len.. going from i to left
  for (let i = points[0].index; i >= 0; i--) {
    const prev = nums[i - 1];
    const curr = nums[i];
    if (prev > curr) {
      points[0].index = i - 1;
      break;
    }
  }
  // extending to the right
  for (let i = points[1].index; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if (next < curr) {
      points[1].index = i + 1;
      break;
    }
  }

  return points[1].index - points[0].index + 1;
};

console.log(shortestUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
