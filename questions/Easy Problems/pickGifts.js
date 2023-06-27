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
};
// main logic is to keep looking for the max with every iteration
// using the approach to control change the to the vals within the index itself
//console.log(pickGifts([25, 64, 9, 4, 100], 4));
