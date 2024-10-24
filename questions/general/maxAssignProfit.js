const maxAssignProfit = (difficulty, profit, worker) => {
  // can be done with O logn and Olog m
  let calc = [];
  let maxProfit = 0;
  for (let i = 0; i < difficulty.length; i++) {
    const profitVal = profit[i];
    const diffLevel = difficulty[i];
    calc.push([diffLevel, profitVal]);
  }
  calc.sort((a, b) => b[0] - a[0]);
  worker.sort((a, b) => b - a);
  let index = 0;
  while (index < worker.length) {
    const currWorker = worker[index];
    let localMaxProfit = 0;
    for (let i = 0; i < calc.length; i++) {
      const currProfit = calc[i][1];
      const currDiff = calc[i][0];
      if (currDiff <= currWorker) {
        localMaxProfit = Math.max(currProfit, localMaxProfit);
      }
    }
    maxProfit += localMaxProfit;
    index++;
  }

  return maxProfit;
};

// console.log(
//   maxAssignProfit(
//     [68, 35, 52, 47, 86],
//     [67, 17, 1, 81, 3],
//     [92, 10, 85, 84, 82]
//   )
// );
