const minimumRounds = (tasks) => {
  if (tasks.length === 1) return -1;
  let map = new Map();
  let minCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
  }

  for (let [_, value] of map) {
    if (value === 1) {
      // if any occurs once its a -1 since atleast 2 or 3 needed to be performed
      return -1;
    }
    if (value === 2 || value === 3) {
      minCount++;
    } else if (value > 3) {
      const remainderTwo = value % 2;
      const remainderThree = value % 3;

      if (remainderThree === 0) {
        minCount += value / 3;
      } //check with the bigger remainder
      else if (remainderThree === 2) {
        minCount += 1 + (value - remainderThree) / 3;
      } else if (remainderThree === 1) {
        // get the closest 3 value
        minCount += 2 + Math.floor(value - 4) / 3; // getting the third value
      } else if (remainderTwo === 0) {
        minCount += value / 2;
      }
      //
    }
  }
  return minCount;
};

console.log(
  minimumRounds([
    69, 65, 62, 64, 70, 68, 69, 67, 60, 65, 69, 62, 65, 65, 61, 66, 68, 61, 65,
    63, 60, 66, 68, 66, 67, 65, 63, 65, 70, 69, 70, 62, 68, 70, 60, 68, 65, 61,
    64, 65, 63, 62, 62, 62, 67, 62, 62, 61, 66, 69,
  ])
);

// 7 3 * 2 and 2 * 3
//
