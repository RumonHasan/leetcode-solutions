const largestNumber = (num) => {
  const intuitiveApproach = (num) => {
    let numSplit = num.split('');
    let arrayEven = [];
    let arrayOdd = [];
    const sortNumberAscending = (num) => num.sort((a, b) => a - b);
    for (let index = 0; index < numSplit.length; index++) {
      const number = Number(numSplit[index]);
      if (number % 2 === 1) {
        arrayOdd.push(Number(numSplit[index]));
      } else {
        arrayEven.push(Number(numSplit[index]));
      }
    }
    let sortedEven = sortNumberAscending(arrayEven);
    let sortedOdd = sortNumberAscending(arrayOdd);
    console.log(sortedEven, sortedOdd);
    // main swapping function to replace the indices
  };

  console.log(intuitiveApproach(num));
};
// swapping with same parity of even and odd indices
console.log(largestNumber('1234'));
