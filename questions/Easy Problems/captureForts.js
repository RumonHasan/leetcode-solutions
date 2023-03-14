const captureForts = (forts) => {
  let counterCollection = [];
  // the bad way
  for (let index = 0; index < forts.length; index++) {
    if (forts[index] === -1) {
      let leftCounter = 0;
      let rightCounter = 0;
      let leftSlice = forts.slice(0, index).reverse();
      let rightSlice = forts.slice(index + 1, forts.length);
      let leftFound = false;
      let rightFound = false;
      // left
      for (let index in leftSlice) {
        if (leftSlice[index] === -1) {
          break;
        }
        if (leftSlice[index] === 1) {
          leftFound = true;
          break;
        }
        leftSlice[index] === 0 && leftCounter++;
      }
      if (leftFound) {
        counterCollection.push(leftCounter);
      }
      // right
      for (let index in rightSlice) {
        if (rightSlice[index] === -1) {
          break;
        }
        if (rightSlice[index] === 1) {
          rightFound = true;
          break;
        }
        rightSlice[index] === 0 && rightCounter++;
      }
      if (rightFound) {
        counterCollection.push(rightCounter);
      }
    }
  }
  return Math.max(...counterCollection) === -Infinity
    ? 0
    : Math.max(...counterCollection);
};
// using two pointer approach
//console.log(captureForts([1, 0, 0, -1, 0, 0, -1, 0, 0, 1]));
