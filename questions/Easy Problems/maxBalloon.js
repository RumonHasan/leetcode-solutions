const maxBalloons = (text) => {
  // making as many balloons as possible
  const timeLimitExceeded = () => {
    // using map approach
    let count = 0;
    while (map.has('b')) {
      let string = '';
      for (let index in target) {
        if (map.has(target[index])) {
          map.set(target[index], map.get(target[index]) - 1);
          // preventing the map from having negative occurence
          if (map.get(target[index]) === 0) {
            map.delete(target[index]);
          }
          string += target[index];
        } else {
          map.delete(target[index]);
        }
      }
      if (string === target) count++;
    }
    return count;
  };
  // optimized using double hash
  const target = 'balloon';
  const targetHash = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };
  const checkHash = {};
  for (let index in text) {
    if (text[index] in targetHash && checkHash[text[index]]) {
      checkHash[text[index]]++;
    } else if (text[index] in targetHash && !checkHash[text[index]]) {
      checkHash[text[index]] = 1;
    }
  }
  // Main Approach: dividing largest occurence by 2 to check for validity

  // initial check for whether one of the primary letters are present in the map or not.
  for (let index in target) {
    if (!checkHash[target[index]]) return 0;
  }
  checkHash['o'] = Math.floor(checkHash['o'] / 2);
  checkHash['l'] = Math.floor(checkHash['l'] / 2);
  // get the values
  let objectValues = Object.values(checkHash);
  return Math.min(...objectValues);
};

//console.log(maxBalloons('loonbalxballpoon'));
