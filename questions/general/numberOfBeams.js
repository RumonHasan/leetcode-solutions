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

  // getting the laser count and checking for connections
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

//console.log(numberOfBeams(['011001', '000000', '010100', '001000']));

const findAndReplaceStrings = (s, indices, sources, targets) => {
  let map = new Map();
  const len = indices.length;
  let result = [];

  // populating map with indices sources and targets
  for (let i = 0; i < len; i++) {
    const currIndex = indices[i];
    const currSource = sources[i];
    const currTarget = targets[i];
    if (map.has(currIndex)) {
      map.get(currIndex).push([currSource, currTarget]);
    } else {
      map.set(currIndex, [[currSource, currTarget]]);
    }
  }

  let index = 0;
  while (index < s.length) {
    const currChar = s[index];
    const currIndex = index;
    // check if index found
    if (map.has(currIndex)) {
      let matched = false;
      // this is an array of source and target
      for (const [source, target] of map.get(currIndex)) {
        const slice = s.slice(index, index + source.length);
        if (slice == source) {
          matched = true;
          result.push(target);
          index += source.length;
          break;
        }
      }
      if (!matched) {
        index++;
        result.push(currChar);
      }
    } else {
      result.push(currChar);
      index++; // loop continues
    }
  }
  return result.join('');
};

console.log(
  findAndReplaceStrings('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])
);
