const descentPeriods = (prices) => {
  let end = 0;
  let subCount = 0;

  while (end < prices.length) {
    let start = end;

    // traversing the end indices
    while (end + 1 < prices.length && prices[end] - 1 === prices[end + 1]) {
      end++;
    }

    const subarrayLen = end - start + 1;
    const subLen = (subarrayLen * (subarrayLen + 1)) / 2; // using formula for checking subarray len

    subCount += subLen;

    end++;
  }

  return subCount;
};

console.log(descentPeriods([3, 2, 1, 4]));
