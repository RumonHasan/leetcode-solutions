const countHillsValleys = (steps, path) => {
  let valleyCounter = 0;
  let seaLevelCounter = 0;
  let index = 0;
  let array = [];
  while (index < steps) {
    if (path[index] === 'U') {
      seaLevelCounter++;
    } else {
      seaLevelCounter--;
    }
    array.push(seaLevelCounter);
    index++;
  }
  array.unshift(0);
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      array[index] = true;
    } else if (array[index] > 0) {
      array[index] = false;
    }
  }
  let end = 0;
  while (end < array.length) {
    if (array[end] === 0) {
      end++;
      while (array[end]) {
        end++;
      }
      if (array[end] === 0) {
        valleyCounter++;
        continue;
      }
      if (!array[end]) {
        end++;
      }
    } else {
      end++;
    }
  }
  return valleyCounter;
};

//console.log(countHillsValleys(12, 'DDUUDDUDUUUD'));
