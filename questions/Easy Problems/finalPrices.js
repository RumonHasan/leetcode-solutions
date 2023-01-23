const finalPrices = (prices) => {
  let newDp = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    if (i !== prices.length - 1) {
      const remainingPrices = prices.slice(i + 1, prices.length);
      console.log(remainingPrices);
      for (let j = 0; j < remainingPrices.length; j++) {
        if (remainingPrices[j] <= prices[i]) {
          const payment = prices[i] - remainingPrices[j];
          newDp[i] = payment;
          break;
        }
        if (
          j === remainingPrices.length - 1 &&
          remainingPrices[j] > prices[i]
        ) {
          newDp[i] = prices[i];
        }
      }
    }
    if (i === prices.length - 1) {
      newDp[i] = prices[i];
    }
  }
  return newDp;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
