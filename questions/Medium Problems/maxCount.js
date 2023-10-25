const maxCount = (banned, n, maxSum) => {
  const intuitiveApproach = () => {
    let sum = 0;
    let collection = [];
    for (let index = 1; index <= n; index++) {
      const number = index;
      if (!banned.includes(number)) {
        collection.push(number);
      }
    }
    collection.sort((a, b) => a - b);
    let checkArray = [];
    if (maxSum < collection[0]) return 0;
    for (let index = 0; index < collection.length; index++) {
      sum += collection[index];
      const checkSum = sum + collection[index + 1];
      checkArray.push(collection[index]);
      if (checkSum > maxSum) break;
    }
    return checkArray.length;
  };
};

//console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1));
