const minimumPushes = (word) => {
  let map = new Map();
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], (map.get(word[i]) || 0) + 1);
  }
  let mapVals = [...map.values()].sort((a, b) => b - a);
  let minCounter = 0;
  let limitCounter = 1;
  let digitCounter = 0;
  for (let i = 0; i < mapVals.length; i++) {
    let counter = mapVals[i];
    minCounter += limitCounter * counter;
    digitCounter++;
    if (digitCounter === 8) {
      limitCounter++;
      digitCounter = 0;
    }
  }
  return minCounter;
};

//console.log(minimumPushes('aabbccddeeffgghhiiiiii'));
