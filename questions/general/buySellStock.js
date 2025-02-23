const buyAndSellStock = (prices) => {
  // two pointer approach
  let buyAmount = prices[0];
  let sellAmount = prices[1];
  let maxProfit = sellAmount > buyAmount ? sellAmount - buyAmount : 0;
  for (let index = 1; index < prices.length; index++) {
    sellAmount = prices[index];
    if (sellAmount > buyAmount) {
      maxProfit = Math.max(sellAmount - buyAmount, maxProfit);
    } else if (buyAmount >= sellAmount) {
      buyAmount = sellAmount;
      console.log(buyAmount);
    }
  }
  return maxProfit;
};

//console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]));
// here only one stock can be kept in one day
const buyAndSellStockII = (prices) => {
  let buyAmount = prices[0];
  let sellAmount = prices[1];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    sellAmount = prices[i];
    buyAmount = prices[i - 1];
    if (sellAmount > buyAmount) {
      maxProfit += sellAmount - buyAmount;
    }
  }

  //console.log(maxProfit);

  return maxProfit;
};

//console.log(buyAndSellStockII([1, 2, 3, 4, 5]));

// getting minimum consequtive cards of minimum single pair card
const minimumConsequtiveCardPickups = (cards) => {
  let set = new Set([...cards]);
  if (set.size === cards.length) {
    return -1;
  }
  let map = new Map();
  let end = 0;
  let start = 0;
  let minLen = Infinity;
  while (end < cards.length) {
    map.set(cards[end], (map.get(cards[end]) || 0) + 1);
    while (map.get(cards[end]) > 1) {
      minLen = Math.min(minLen, end - start + 1);
      map.set(cards[start], map.get(cards[start]) - 1);
      if (map.get(cards[start]) === 0) {
        map.delete(cards[start]);
      }
      start++;
    }
    end++;
  }
  return minLen;
};

console.log(
  minimumConsequtiveCardPickups([
    70, 37, 70, 41, 1, 62, 71, 49, 38, 50, 29, 76, 29, 41, 22, 66, 88, 18, 85,
    53,
  ])
);
