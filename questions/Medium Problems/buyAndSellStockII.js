const maxProfitBestTimeToBuyAndSellII = (prices) => {
  let totalProfit = 0;
  let stocks = [];
  for (let index = 0; index < prices.length; index++) {
    const currentPrice = prices[index];
    const nextPrice = prices[index + 1];
    if (stocks.length === 0 && nextPrice > currentPrice) {
      stocks.push(currentPrice);
    }
    if (stocks.length && nextPrice < currentPrice) {
      const profit = currentPrice - stocks[stocks.length - 1];
      totalProfit += profit;
      stocks.pop();
    }
    if (stocks.length && !nextPrice && currentPrice >= prices[index - 1]) {
      const profit = currentPrice - stocks[stocks.length - 1];
      totalProfit += profit;
      stocks.pop();
    }
  }
  return totalProfit;
};

// in this case we can as much as transactions we can
// console.log(
//   maxProfitBestTimeToBuyAndSellII([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9])
// );
