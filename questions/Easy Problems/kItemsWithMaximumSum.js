const kItemsWithMaximumSum = (numOnes, numZeros, numNegOnes, k) => {
  let totalSum = 0;
  const populate = (len, type) => {
    let subArray = [];
    if (len > 0) {
      for (let index = 0; index < len; index++) {
        switch (type) {
          case '1':
            subArray.push(1);
            break;
          case '-1':
            subArray.push(-1);
            break;
          case '0':
            subArray.push(0);
            break;
        }
      }
    }
    return subArray;
  };

  let ones = populate(numOnes, '1');
  let negs = populate(numNegOnes, '-1');
  let zeros = populate(numZeros, '0');
  let array = [...ones, ...zeros, ...negs];
  let counter = 0;
  for (let index in array) {
    if (counter === k) break;
    totalSum += array[index];
    counter++;
  }
  return totalSum;
};

//console.log(kItemsWithMaximumSum(3, 2, 0, 2));
