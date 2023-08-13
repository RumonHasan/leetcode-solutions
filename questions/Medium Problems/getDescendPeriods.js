const getDescentPeriods = (prices) => {
  const basicIntuitiveApproach = () => {
    let totalCount = 0;
    let check = false;
    for (let index = 0; index < prices.length; index++) {
      const next = prices[index + 1];
      const current = prices[index];
      if (current - next === 1) {
        check = true;
        break;
      }
    }
    if (!check) return prices.length; // small edge case
    // main problem
    let end = 1;
    let start = 0;
    while (end < prices.length) {
      if (prices[end - 1] - prices[end] !== 1) {
        start = end;
      }
      const len = end - start + 1;
      totalCount += len;
      end++;
    }
    return totalCount;
  };
};

//console.log(getDescentPeriods([3, 2, 1, 4]));
