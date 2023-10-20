const flowerPlace = (flowerbed, n) => {
  const basicApproach = () => {
    for (let index = 0; index < flowerbed.length; index++) {
      if (n === 0) break;
      const position = flowerbed[index];
      const prev = flowerbed[index - 1] ? flowerbed[index - 1] : 0;
      const front = flowerbed[index + 1] ? flowerbed[index + 1] : 0;
      if (position === 0) {
        if (prev === 0 && front === 0) {
          flowerbed[index] = 1;
          n--;
        }
      }
    }
    return n === 0;
  };
};

//console.log(flowerPlace([0, 0, 1, 0, 0], 1));
