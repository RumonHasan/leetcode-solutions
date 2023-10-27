const findEvenNumbers = (digits) => {
  const uglySolution = () => {
    let collection = [];
    const stringConvert = (num) => num.toString();
    for (let index = 0; index < digits.length; index++) {
      for (let subIndex = 0; subIndex < digits.length; subIndex++) {
        for (let thirdIndex = 0; thirdIndex < digits.length; thirdIndex++) {
          const number = stringConvert(digits[index]);
          const secondNum = stringConvert(digits[subIndex]);
          const thirdNum = stringConvert(digits[thirdIndex]);
          if (
            index !== subIndex &&
            subIndex !== thirdIndex &&
            thirdIndex !== index
          ) {
            const finalNumber = Number(number + secondNum + thirdNum);
            if (finalNumber % 2 === 0 && finalNumber.toString().length === 3) {
              collection.push(finalNumber);
            }
          }
        }
      }
    }
    let newArray = Array.from(new Set([...collection]));
    return newArray.sort((a, b) => a - b);
  };
};

//console.log(findEvenNumbers([2, 1, 3, 0]));
