const totalMoney = (n) => {
  let totalMoney = 0;
  let index = 0;
  let moneyCounter = 1;
  let prevCounter = moneyCounter; // prev tracker for old record
  let moneyTracker = 0;
  while (index < n) {
    if (moneyTracker === 7) {
      moneyCounter = prevCounter + 1;
      prevCounter = moneyCounter;
      moneyTracker = 0;
    }
    totalMoney += moneyCounter;
    moneyCounter++;
    moneyTracker++;

    index++;
  }
  return totalMoney;
};

//console.log(totalMoney(20));
