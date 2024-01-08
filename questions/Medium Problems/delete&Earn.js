const deleteAndEarn = (nums) => {
  const intuitiveApproach = () => {
    const getMapAndArray = (arr) => {
      let map = new Map();
      for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        map.set(currNum, (map.get(currNum) || 0) + 1);
      }
      let array = [...map.keys()].sort((a, b) => a - b);
      return {
        map: map,
        array: array,
      };
    };
    // destructured new array and map containing the duplicate occurences
    const { array, map } = getMapAndArray(nums);
    let dp = new Array(array.length).fill(0);
    let end = 0;
    while (end < array.length) {
      let currNum = array[end];
      let prevNum = array[end - 1];
      if (end === 0) {
        dp[end] = map.get(currNum) * currNum;
      }
      if (end === 1) {
        if (prevNum === currNum - 1) {
          dp[end] = Math.max(dp[end - 1], map.get(currNum) * currNum);
        } else {
          dp[end] = dp[end - 1] + map.get(currNum) * currNum;
        }
      }
      if (end > 1) {
        if (prevNum === currNum - 1) {
          dp[end] = Math.max(
            dp[end - 1],
            dp[end - 2] + currNum * map.get(currNum)
          );
        } else {
          dp[end] = dp[end - 1] + map.get(currNum) * currNum;
        }
      }
      end++;
    }
    return dp[dp.length - 1];
  };
};
//[2,3,4]
//console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));

const unequalTriplets = (nums) => {
  const basicBruteForce = () => {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
      let first = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        let second = nums[j];
        for (let k = j + 1; k < nums.length; k++) {
          let third = nums[k];
          if (first !== second && second !== third && third !== first) {
            counter++;
          }
        }
      }
    }
    return counter;
  };
};

// console.log(unequalTriplets([4, 4, 2, 4, 3]));

const divideString = (s, k, fill) => {
  let counter = 0;
  let end = 0;
  let string = '';
  let collection = [];
  while (end < s.length) {
    if (counter === k) {
      collection.push(string);
      string = '';
      counter = 0;
    }
    const currChar = s[end];
    string += currChar;
    counter++;
    if (end === s.length - 1) {
      collection.push(string);
    }
    end++;
  }
  if (collection[collection.length - 1].length < k) {
    const missingChar = k - collection[collection.length - 1].length;
    let endString = (collection[collection.length - 1] +=
      fill.repeat(missingChar));
    collection.splice(collection.length - 1, 1, endString);
  }
  return collection;
};

//console.log(divideString('abcdefghij', 3, 'x'));
