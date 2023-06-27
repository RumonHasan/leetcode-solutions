const pickGifts = (gifts, k) => {
  const oneCleanApproach = () => {
    let counter = 0;
    const getArrayIndex = (array) => {
      const maxVal = Math.max(...array);
      return array.indexOf(maxVal);
    };
    // counter checking to prevent it from being overselecting beyond k
    while (counter < k) {
      let localIndex = getArrayIndex(gifts);
      gifts[localIndex] = Math.floor(Math.sqrt(gifts[localIndex]));
      counter++;
    }
    return gifts.reduce((acc, currentEl) => currentEl + acc);
  };

  const optimized = () => {
    let checkCounter = 0;
    while (checkCounter < k) {
      if (checkCounter <= k) {
        let maxVal = Math.max(...gifts);
        let subIndex = gifts.indexOf(maxVal);
        gifts[subIndex] = Math.floor(Math.sqrt(maxVal));
      }
      checkCounter++;
    }
    return gifts.reduce((acc, curr) => acc + curr);
  };

  // further optimized using forloop
  const forLoopOptimization = () => {
    for (let index = 0; index < k; index++) {
      const maxVal = Math.max(...gifts);
      const localIndex = gifts.indexOf(maxVal);
      gifts[localIndex] = Math.floor(Math.sqrt(maxVal));
    }
    return gifts.reduce((ac, cur) => ac + cur);
  };
};
// main logic is to keep looking for the max with every iteration
// using the approach to control change the to the vals within the index itself
//console.log(pickGifts([25, 64, 9, 4, 100], 4));
