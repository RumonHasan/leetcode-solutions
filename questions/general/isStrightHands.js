const isNStraightHands = (hand, groupSize) => {
  let handLen = hand.length;
  if (handLen % groupSize !== 0) return false;
  let map = new Map();
  for (let i = 0; i < hand.length; i++) {
    const currHand = hand[i];
    map.set(currHand, (map.get(currHand) || 0) + 1);
  }
  let sortedKeys = hand.sort((a, b)=> a - b);
  for (let vals of sortedKeys){
    let key = vals;
    if (map.has(key) && map.get(key) > 0){
        map.set(key, map.get(key) - 1);
        for (let i = 0; i < groupSize - 1; i++){
            key += 1;
         
            if (map.get(key) === 0 || !map.has(key)) return false;
            map.set(key, map.get(key) - 1);

        }
    }
  }
  return true;
};

//console.log(isNStraightHands([1,1,2,2,3,3], 3));
