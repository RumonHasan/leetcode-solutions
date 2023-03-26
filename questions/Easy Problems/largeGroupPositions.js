const largeGroupPositions = (s) => {
  let positions = [];
  let char = s[0];
  let counter = 0;
  let initialIndex = 0;
  let finalIndex = 0;
  for (let index = 1; index < s.length; index++) {
    if (s[index] === char) {
      counter++;
      finalIndex = index;
    } else {
      char = s[index];
      counter = 0;
      initialIndex = index;
      finalIndex = index;
    }
    const difference = finalIndex - initialIndex + 1;
    if (difference >= 3) {
      let position = [initialIndex, finalIndex];
      if (
        positions.length >= 1 &&
        positions[positions.length - 1][0] === initialIndex
      ) {
        positions.pop();
      }
      positions.push(position);
    }
  }
  return positions;
};
// get the large group of same character positions
// console.log(largeGroupPositions('abbxxxxzzy'));
