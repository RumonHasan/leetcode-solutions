const maxProfit = (prices) => {
  let profit = 0;
  let newMinium = Infinity;
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < prices[index + 1]) {
      newMinium = Math.min(newMinium, prices[index]);
      continue;
    }
    let localProfit = prices[index] - newMinium;
    profit = Math.max(profit, localProfit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
