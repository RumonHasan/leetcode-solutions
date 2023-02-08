const numberOfWeakChars = (properties) => {
  // sorting based on attack values
  const sortedProperties = properties.sort(
    (a, b) =>
      // attack same : defence increase  or attack same
      b[0] - a[0] || a[1] - b[1]
  );
  // attacks are in descending order and defences are in ascending order
  let max = 0;
  let weakCardCount = 0;
  for (let i = 0; i < sortedProperties.length; i++) {
    if (sortedProperties[i][1] < max) {
      weakCardCount++;
    }
    console.log(max, sortedProperties[i], weakCardCount);
    max = Math.max(max, sortedProperties[i][1]);
  }
  return weakCardCount;
};

// the first index is attack and the second index in defense
// console.log(
//   numberOfWeakChars([
//     [7, 7],
//     [1, 2],
//     [9, 7],
//     [7, 3],
//     [3, 10],
//     [9, 8],
//     [8, 10],
//     [4, 3],
//     [1, 5],
//     [1, 5],
//   ])
// );
