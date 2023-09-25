const minimumAbsoluteDifference = (arr) => {
  const timeLimitExceededBadSolution = () => {
    let minimumDifference = Infinity;
    for (let index = 0; index < arr.length; index++) {
      for (let subIndex = index + 1; subIndex < arr.length; subIndex++) {
        minimumDifference = Math.min(
          Math.abs(arr[subIndex] - arr[index]),
          minimumDifference
        );
      }
    }
    let collection = [];
    for (let index = 0; index < arr.length; index++) {
      for (let subIndex = index + 1; subIndex < arr.length; subIndex++) {
        const difference = Math.abs(arr[index] - arr[subIndex]);
        if (difference === minimumDifference) {
          collection.push([arr[index], arr[subIndex]]);
        }
      }
    }
    return collection
      .map((item) => {
        if (item[0] < item[1]) {
          return item;
        } else {
          return [item[1], item[0]];
        }
      })
      .sort((a, b) => a[0] - b[0]);
  };

  // right solution after sorting
  const optimizedSolution = (arr) => {
    const sortedArray = arr.sort((a, b) => a - b);
    let minDifference = Infinity;
    for (let index = 1; index < sortedArray.length; index++) {
      minDifference = Math.min(
        Math.abs(sortedArray[index] - sortedArray[index - 1]),
        minDifference
      );
    }
    let end = 1;
    let collection = [];
    while (end < sortedArray.length) {
      const current = sortedArray[end];
      const prev = sortedArray[end - 1];
      const difference = Math.abs(current - prev);
      if (difference === minDifference) {
        collection.push([prev, current]);
      }
      end++;
    }
    return collection;
  };

  //   console.log(optimizedSolution([3, 8, -10, 23, 19, -4, -14, 27]));
};

//console.log(minimumAbsoluteDifference([3, 8, -10, 23, 19, -4, -14, 27]));
