const canPlaceFlowers = (flowerbed, n) => {
  // in the case of no flower required;
  if (n === 0) {
    return true;
  }
  // check position
  const checkPositionValidity = (prevPosition, nextPosition) => {
    if (prevPosition === 0 && nextPosition === 0) {
      return true;
    }
    return false;
  };
  // main iteration

  for (let index = 0; index < flowerbed.length; index++) {
    // check for possibility for a flowerbed position
    if (flowerbed[index] === 0) {
      // different positions setups
      if (index === 0) {
        const prevPosition = 0;
        const nextPosition =
          flowerbed[index + 1] === undefined ? 0 : flowerbed[index + 1];
        if (checkPositionValidity(prevPosition, nextPosition)) {
          flowerbed[index] = 1;
          n -= 1;
          if (n === 0) {
            break;
          }
        }
      } else if (index === flowerbed.length - 1) {
        const prevPosition = flowerbed[index - 1];
        const nextPosition = 0;
        if (checkPositionValidity(prevPosition, nextPosition)) {
          flowerbed[index] = 1;
          n -= 1;
          if (n === 0) {
            break;
          }
        }
      } else {
        const prevPosition = flowerbed[index - 1];
        const nextPosition = flowerbed[index + 1];
        if (checkPositionValidity(prevPosition, nextPosition)) {
          flowerbed[index] = 1;
          n -= 1;
          if (n === 0) {
            break;
          }
        }
      }
    }
  }
  return n === 0;
};

// single iteration to plant flowers per 0 and check the adjacent elements in order to ensure whetehr things are running or not
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
