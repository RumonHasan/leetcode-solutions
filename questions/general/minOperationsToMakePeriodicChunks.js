const minOpPeriodicChunks = (word, k) => {
  let map = new Map();
  let string = '';
  let maxFreq = 0;
  for (let i = 0; i < word.length; i++) {
    const currChar = word[i];
    string += currChar;
    if (string.length === k) {
      map.set(string, (map.get(string) || 0) + 1);
      if (string.length) {
        maxFreq = Math.max(maxFreq, map.get(string));
      }
      string = '';
    }
  }
  let mapVals = [...map.values()];
  let totalChunks = mapVals.reduce((a, b) => a + b, 0);
  return totalChunks - maxFreq;
};

// have to form k periodic partitions then calculate the total frequency then subtracted with the chunks to find the number of operations needed
//console.log(minOpPeriodicChunks('leetcodeleet', 4));

const maxBoxUnits = (boxTypes, truckSize) => {
  let boxCount = 0;
  let maxUnits = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    const currentUnits = boxTypes[i][1];
    const currBoxCount = boxTypes[i][0];
    const currTotalUnits = currentUnits * currBoxCount;

    maxUnits += currTotalUnits;
    boxCount += currBoxCount;

    // if its more reduce adjust then remove
    if (boxCount > truckSize) {
      const adjustCount = boxCount - truckSize;
      maxUnits -= adjustCount * currentUnits;
      break;
    }
  }

  return maxUnits;
};

console.log(
  maxBoxUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
