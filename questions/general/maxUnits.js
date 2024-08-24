const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let boxCount = 0;
  let total = 0;
  let exceedBox = [];
  for (let i = 0; i < boxTypes.length; i++) {
    const currBox = boxTypes[i][0];
    const currBoxItems = boxTypes[i][1];
    total += currBox * currBoxItems;
    boxCount += currBox;

    if (boxCount === truckSize) {
      return total;
    }
    if (boxCount > truckSize) {
      exceedBox = [currBox, currBoxItems];
      break;
    }
    if (i === boxTypes.length - 1) {
      return total;
    }
  }
  const extraBoxCount = (boxCount - truckSize) * exceedBox[1];
  return total - extraBoxCount;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
);
