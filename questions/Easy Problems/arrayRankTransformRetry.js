const arrayRankTransformRetry = (arr) => {
  let sortedArray = [...arr].sort((a, b) => a - b);
  let dpArray = new Array(arr.length).fill(0);
  let map = new Map();
  for (let index in sortedArray) {
    if (Number(index) === 0) {
      map.set(sortedArray[index], 1);
    } else {
      map.has(sortedArray[index])
        ? map.set(sortedArray[index], map.get(sortedArray[index]))
        : map.set(sortedArray[index], map.get(sortedArray[index - 1]) + 1);
    }
  }
  for (let index = 0; index < arr.length; index++) {
    dpArray[index] = map.get(arr[index]);
  }
  return dpArray;
};

console.log(arrayRankTransformRetry([37, 12, 28, 9, 100, 56, 80, 5, 12]));
