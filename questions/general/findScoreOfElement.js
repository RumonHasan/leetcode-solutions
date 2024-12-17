const findScore = (nums) => {
  let array = nums.map((num, index) => [num, index]);
  // sorting based on value then index
  let sorted = array.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  // now checking per element
  let total = 0;
  let boolArray = new Array(nums.length).fill(false);
  for (let i = 0; i < sorted.length; i++) {
    const [num, index] = sorted[i];
    const nextIndex = index + 1;
    const prevIndex = index - 1;
    // check for bool state form indexing array
    if (!boolArray[index]) {
      total += num;
      boolArray[index] = true;
      boolArray[nextIndex] = true;
      boolArray[prevIndex] = true;
    }
  }
  return total;
};
/*) [1, 2, 2, 3, 3, 5]*/

//console.log(findScore([2, 1, 3, 4, 5, 2]));

const meanTrimMean = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  // remove top and small 5 % of the elements
  const avgCalc = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
  };
  const fivePercent = Math.floor((5 / 100) * arr.length);
  let newArray = [];
  for (let i = fivePercent; i < sorted.length - fivePercent; i++) {
    newArray.push(sorted[i]);
  }
  return avgCalc(newArray);
};

console.log(
  meanTrimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
);

const array = [1, 2, 3, 4, 4];
