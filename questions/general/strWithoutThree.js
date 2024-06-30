const strWithoutThree = (a, b) => {
  let result = '';
  while (a > 0 && b > 0) {
    if (a === b) {
      result += 'ab';
      a--;
      b--;
    } else if (a > b) {
      result += 'aab';
      a -= 2;
      b -= 1;
    } else if (b > a) {
      result += 'bba';
      b -= 2;
      a -= 1;
    }
  }
  if (a > 0) {
    result += 'a'.repeat(a);
  } else if (b > 0) {
    result += 'b'.repeat(b);
  }
  return result;
};

// str should be without 3 a or 3 b repeats
console.log(strWithoutThree(4, 1));

const findAllDuplicatesInAnArray = (nums) => {
  const setWay = () => {
    let set = new Set();
    let collection = [];
    for (let num of nums) {
      if (set.has(num)) collection.push(num);
      set.add(num);
    }
    return collection;
  };

  // we know here the nums are rangin from 1 to n hence we can use the nums to calculate the subtracted indices
  const optimizedWay = () => {
    let collection = [];
    for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      let differenceIndex = Math.abs(currNum) - 1;
      if (nums[differenceIndex] < 0) {
        collection.push(Math.abs(currNum));
      }
      if (nums[differenceIndex] > 0) {
        nums[differenceIndex] = -nums[differenceIndex];
      }
    }
    return collection;
  };
  //console.log(optimizedWay());
};

//console.log(findAllDuplicatesInAnArray([4, 3, 2, 7, 8, 2, 3, 1]));
