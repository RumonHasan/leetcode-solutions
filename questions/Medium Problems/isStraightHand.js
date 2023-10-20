const isNStraightHands = (hand, groupSize) => {
  const intuitiveApproach = () => {
    const groupCheck = Math.floor(hand.length / groupSize);
    if (hand.length % groupCheck !== 0) return false;
    const sortedHand = hand.sort((a, b) => a - b);
    let map = new Map();
    for (let index = 0; index < sortedHand.length; index++) {
      if (map.has(sortedHand[index])) {
        map.set(sortedHand[index], map.get(sortedHand[index]) + 1);
      } else {
        map.set(sortedHand[index], 1);
      }
    }
    for (let index = 0; index < hand.length; index++) {
      const handCard = hand[index];
      if (!map.has(handCard)) continue;
      for (let subIndex = 0; subIndex < groupSize; subIndex++) {
        // using the general index to add increments to the number in the map
        if (!map.has(handCard + subIndex)) return false;
        if (map.has(handCard + subIndex)) {
          map.set(handCard + subIndex, map.get(handCard + subIndex) - 1);
        }
        if (map.get(handCard + subIndex) === 0) {
          map.delete(handCard + subIndex);
        }
      }
    }
    return true;
  };

  const optimizedApproach = () => {
    // using hash instead of map
    const groupCheck = Math.floor(hand.length / groupSize);
    if (hand.length % groupCheck !== 0) return false;
    let hash = {};
    let handSort = hand.sort((a, b) => a - b);
    for (let index in handSort) {
      hash[handSort[index]]
        ? hash[handSort[index]]++
        : (hash[handSort[index]] = 1);
    }
    for (let index = 0; index < handSort.length; index++) {
      if (hash[handSort[index]] === 0) continue;
      let currIndex = 0;
      while (currIndex < groupSize) {
        const currentVal = handSort[index] + currIndex;
        if (!hash[currentVal]) return false;
        if (hash[currentVal]) {
          hash[currentVal]--;
        }
        currIndex++;
      }
    }
    return true;
  };

  //   console.log(optimizedApproach());
};

//console.log(isNStraightHands([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
