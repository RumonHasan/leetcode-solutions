const canPlaceFlowersNew = (flowerbed, n) => {
  for (let index = 0; index < flowerbed.length; index++) {
    if (n === 0) {
      return true;
    }
    if (flowerbed[index] === 0) {
      const left = index === 0 ? 0 : index - 1;
      const right =
        index === flowerbed.length - 1 ? flowerbed.length - 1 : index + 1;
      if (flowerbed[left] === 0 && flowerbed[right] === 0) {
        flowerbed[index] = 1;
        n--;
      }
    }
  }
  return n === 0;
};

//console.log(canPlaceFlowersNew([0, 0, 1, 0, 0], 1));
