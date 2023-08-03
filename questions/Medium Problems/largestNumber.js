const largestNumber = (nums) => {
  const convertNumber = (num) => {
    return num.toString().split('');
  };
  let sortedArray = nums.sort((a, b) => {
    const numA = convertNumber(a);
    const numB = convertNumber(b);
    if (Number(numB[0]) === Number(numA[0])) {
      return b - a;
    } else {
      return Number(numB[0]) - Number(numA[0]);
    }
  });
  const compare = (curr, prev) => {
    let comboOne = curr.toString() + prev.toString();
    let comboTwo = prev.toString() + curr.toString();
    return comboTwo > comboOne;
  };
  // checking every pair
  let end = 1;
  while (end < sortedArray.length) {
    const current = sortedArray[end];
    const prevNumber = sortedArray[end - 1];
    if (!compare(current, prevNumber)) {
      sortedArray[end] = prevNumber;
      sortedArray[end - 1] = current;
    }
    end++;
  }
  return sortedArray[0] === 0 ? '0' : sortedArray.join('');
};

// console.log(largestNumber([3, 30, 34, 5, 9]));
