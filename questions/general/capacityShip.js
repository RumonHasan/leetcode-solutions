const capacityToShipPackages = (weights, days) => {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  while (left < right) {
    const midWeight = Math.floor((left + right) / 2);
    let currTotalWeight = 0;
    let currDays = 0; // since it starts from 1 then we dont need to add 1 extra

    for (let i = 0; i < weights.length; i++) {
      const currWeight = weights[i];
      currTotalWeight += currWeight;
      // if curr total weight is
      if (currTotalWeight > midWeight) {
        currDays++;
        currTotalWeight = currWeight;
      }

      if (i === weights.length - 1) {
        currDays++;
      }
    }
    // check with curr weight
    if (currDays > days) {
      // choose a bigger limit for weight distribution
      left = midWeight + 1;
    } else if (currDays <= days) {
      right = midWeight;
    }
  }

  return left;
};

// binary search problem to check for the minimum capacity required to within <= 5 d days
console.log(capacityToShipPackages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
