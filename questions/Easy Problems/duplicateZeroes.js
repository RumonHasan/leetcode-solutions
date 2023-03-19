const duplicateZeros = (arr) => {
  let counter = 0;
  let zeroPositions = [];
  let numbers = [];
  for (let index in arr) {
    if (arr[index] === 0) {
      zeroPositions.push(Number(index));
      counter++;
    } else if (arr[index] !== 0) {
      numbers.push(arr[index]);
    }
  }
  let numberIndex = 0;
  let dp = new Array(arr.length + counter).fill('');
  let localIndex = 0;
  let pushCounter = 0;
  for (let index = 0; index < dp.length; index++) {
    if (Number(index) === zeroPositions[localIndex]) {
      if (localIndex > 0) {
        pushCounter++;
      }
      dp[index + pushCounter] = 0;
      dp[index + 1 + pushCounter] = 0;
      localIndex++;
    }
  }
  for (let index in dp) {
    if (dp[index] === '') {
      dp[index] = numbers[numberIndex];
      numberIndex++;
    }
  }
  let result = dp.slice(0, dp.length - counter);
  for (let index in result) {
    arr[index] = result[index];
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
