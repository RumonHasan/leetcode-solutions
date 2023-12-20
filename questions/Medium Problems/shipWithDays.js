const shipWithDays = (weights, days) => {
  const intuitiveApproach = () => {
    let weightRange = [Math.max(...weights), weights.reduce((a, b) => a + b)];
    console.log(weightRange);
    for (let index = weightRange[0]; index <= weightRange[1]; index++) {
      const currMinWeight = index;
      let subTotal = 0;
      let dayCounter = 0;
      for (let i = 0; i < weights.length; i++) {
        const currWeight = weights[i];
        subTotal += currWeight;
        // condition to check if its bigger then draw counter
        if (
          subTotal + weights[i + 1] > currMinWeight ||
          i === weights.length - 1
        ) {
          dayCounter++;
          subTotal = 0;
        }
      }
      if (dayCounter === days) {
        return currMinWeight;
      }
    }
  };

  console.log(intuitiveApproach());
};
// using the weight ranges in order to determine whether the weight can be distributed between the range or not
console.log(shipWithDays([1, 2, 3, 1, 1], 4));
