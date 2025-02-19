const numberOfBeams = (bank) => {
  let counter = 0;
  let previousLaserCount = 0;

  // getting initial laser count
  for (let i = 0; i < bank[0].length; i++) {
    const currentDevice = bank[0][i];
    if (currentDevice === '1') {
      previousLaserCount++;
    }
  }

  for (let i = 1; i < bank.length; i++) {
    let rowLaserCount = 0;
    for (let j = 0; j < bank[i].length; j++) {
      const currentDevice = bank[i][j];
      if (currentDevice === '1') {
        rowLaserCount++;
      }
    }
    if (rowLaserCount > 0 && previousLaserCount > 0) {
      counter += previousLaserCount * rowLaserCount;
      previousLaserCount = rowLaserCount; // updating previous laser count
    } else if (previousLaserCount === 0 && rowLaserCount > 0) {
      previousLaserCount = rowLaserCount;
    }
  }

  return counter;
};

console.log(numberOfBeams(['011001', '000000', '010100', '001000']));
