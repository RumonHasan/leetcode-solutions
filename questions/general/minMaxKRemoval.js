const minMaxKRemoval = (n, arr, k) => {
  if (arr.length <= k || !arr) {
    // removals have to be within the limit
    return [0, 0];
  }
  let total = arr.reduce((acc, curr) => acc + curr, 0);
  // uses no sorting function in order to get the min and max value
  const getMaxRemoval = () => {
    let tempArr = [...arr];
    let sumMax = 0;
    for (let i = 0; i < k; i++) {
      let maxIndex = 0;
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j] > tempArr[maxIndex]) {
          maxIndex = j; // keep changing till it finds max
        }
      }
      sumMax += tempArr[maxIndex];
      tempArr[maxIndex] = -Infinity; // optional here array can be spliced instead of switched values
    }
    return sumMax;
  };
  const getMinRemoval = () => {
    let tempArr = [...arr];
    let sumMin = 0;
    for (let i = 0; i < k; i++) {
      let minIndex = 0;
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j] < tempArr[minIndex]) {
          minIndex = j; // keep changing till it finds max
        }
      }
      sumMin += tempArr[minIndex];
      tempArr[minIndex] = Infinity;
    }
    return sumMin;
  };

  const getMax = getMaxRemoval();
  const getMin = getMinRemoval();

  return [total - getMax, total - getMin];
};

console.log(minMaxKRemoval(5, [1, 2, 3, 4, 5], 2));

// max removal sum => 6
// min removal sum => 12
