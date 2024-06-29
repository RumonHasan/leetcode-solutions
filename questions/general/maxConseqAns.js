const maxConsequtiveAnswers = (answerKey, k) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let maxLen = 0;
  while (end < answerKey.length) {
    map.set(answerKey[end], (map.get(answerKey[end]) || 0) + 1);
    while (
      end -
        start +
        1 -
        (map.get('T') > map.get('F') ? map.get('T') : map.get('F')) >
      k
    ) {
      map.set(answerKey[start], map.get(answerKey[start]) - 1);
      if (map.get(answerKey[start]) === 0) {
        map.delete(answerKey[start]);
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

//console.log(maxConsequtiveAnswers('TTFTTFTT', 1));
const longestAlternatingSubarray = (nums, threshold) => {
  let i = 0;
  let j = 0;
  let maxLen = 0;
  while (i < nums.length) {
    let currNum = nums[i];
    if (currNum % 2 === 0 && currNum <= threshold) {
      // start from here
      j = i;
      let isEven = true;
      while (
        j < nums.length &&
        nums[j] <= threshold &&
        nums[j] % 2 === (isEven ? 0 : 1)
      ) {
        j++;
        isEven = !isEven;
      }
      maxLen = Math.max(maxLen, j - i);
    }
    i++;
  }
  return maxLen;
};

//console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));

const numberOfWeakCharacters = (properties) => {
  const TLE = () => {
    properties.sort((a, b) => a[0] - b[0]);
    let end = 0;
    let counter = 0;
    while (end < properties.length) {
      let curr = properties[end];
      let sub = end + 1;
      while (sub < properties.length) {
        if (curr[0] < properties[sub][0] && curr[1] < properties[sub][1]) {
          counter++;
          break;
        }
        sub++;
      }
      end++;
    }
    return counter;
  };

  const optimized = () => {
    properties.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    });
    let count = 0,
      max = 0;
    // only keeping track of the max defense since attack is already sorted
    for (let arr of properties) {
      if (arr[1] < max) {
        console.log(arr);
        count++;
      }
      max = Math.max(max, arr[1]);
    }
    return count;
  };
};

console.log(
  numberOfWeakCharacters([
    [7, 7],
    [1, 2],
    [9, 7],
    [7, 3],
    [3, 10],
    [9, 8],
    [8, 10],
    [4, 3],
    [1, 5],
    [1, 5],
  ])
);
