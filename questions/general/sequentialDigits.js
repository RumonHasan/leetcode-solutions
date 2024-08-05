const sequentialDigits = (low, high) => {
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let minLen = low.toString().length;
  let maxLen = high.toString().length;
  let collection = [];
  for (let i = minLen; i <= maxLen; i++) {
    for (let j = 0; j < 10 - i; j++) {
      const window = digits.slice(j, j + i); // creating slice substrings
      const num = parseInt(window.join(''));
      if (num >= low && num <= high) {
        collection.push(num);
      }
    }
  }
  return collection;
};

// gonna use the upper and lower bounds in order use sliding window
//console.log(sequentialDigits(1000, 13000));

const findValueInPartition = (nums) => {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const prev = nums[i - 1];
    min = Math.min(Math.abs(curr - prev), min);
  }
  return min === Infinity ? 0 : min;
};

//console.log(findValueInPartition([100, 1, 10]));

const distributeCandies = (candies, num_people) => {
  let dp = new Array(num_people).fill(0);
  let candyCounter = 0;
  let index = 0;
  let check = false;
  let round = 0;
  while (candyCounter < candies) {
    if (check) {
      dp[index] += round * num_people + index + 1;
      candyCounter += round * num_people + index + 1;
    } else {
      dp[index] += index + 1;
      candyCounter += index + 1;
    }
    // will have the break conditions here
    if (candyCounter > candies) {
      const extra = candyCounter - candies;
      dp[index] -= extra;
      break;
    }
    if (index === dp.length - 1) {
      index = 0;
      check = true;
      round++;
      continue;
    }
    index++;
    //console.log(candyCounter, dp);
  }
  return dp;
};

//console.log(distributeCandies(60, 4));
