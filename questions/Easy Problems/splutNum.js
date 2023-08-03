const splitNum = (num) => {
  const basicIntuition = () => {
    let array = num
      .toString()
      .split('')
      .map((num) => Number(num))
      .sort((a, b) => a - b);
    let numOne = [];
    let numTwo = [];
    let check = false;
    for (let index in array) {
      if (!check) {
        numOne.push(array[index]);
      }
      if (check) {
        numTwo.push(array[index]);
      }
      check = !check;
    }
    return Number(numOne.join('')) + Number(numTwo.join(''));
  };
};

// console.log(splitNum(4325));
