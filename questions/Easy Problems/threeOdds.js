const threeOdds = (arr) => {
  const checkOdd = (num) => num % 2 === 1;
  let counter = 0;
  for (let index = 0; index < arr.length; index++) {
    let numCheck = checkOdd(arr[index]);
    if (numCheck) counter++;
    if (!numCheck) counter = 0;
    if (counter === 3) return true;
  }
  return false;
};

//console.log(threeOdds([1, 2, 34, 3, 4, 5, 7, 23]));
