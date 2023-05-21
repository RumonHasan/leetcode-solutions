const threeConsequtiveOdds = (arr) => {
  // basic approach
  const checkOdd = (num) => num % 2 === 1;
  for (let index = 1; index < arr.length; index++) {
    if (
      checkOdd(arr[index + 1]) &&
      checkOdd(arr[index - 1]) &&
      checkOdd(arr[index])
    ) {
      return true;
    }
  }

  return false;
};

//console.log(threeConsequtiveOdds([102, 780, 919, 897, 901]));
