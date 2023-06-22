const buyChoco = (prices, money) => {
  prices.sort((a, b) => a - b);
  let totalPriceChoco = prices[1] + prices[0];
  if (totalPriceChoco > money) {
    return money;
  } else {
    const difference = money - totalPriceChoco;
    return difference;
  }
};

//console.log(buyChoco([3, 2, 3], 3));
