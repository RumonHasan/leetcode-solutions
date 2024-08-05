const minFlips = (target) => {
  let index = 0;
  let counter = 0;
  let tArray = target.split('').map((item) => Number(item));
  if (tArray.every((item) => item === tArray[0] && item === 0)) return 0;
  // have to start from the first one since before that u dont need to change
  for (let i = 0; i < tArray.length; i++) {
    if (tArray[i] === 1) {
      index = i;
      break;
    }
  }
  while (index < target.length) {
    if (target[index] === '1') {
      while (index < target.length && target[index] === '1') {
        index++;
      }
      counter++;
    } else {
      while (index < target.length && target[index] === '0') {
        index++;
      }
      counter++;
    }
  }
  return counter;
};

//console.log(minFlips(''));
