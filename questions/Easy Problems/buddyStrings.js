const buddyStrings = (s, goal) => {
  if (s.length !== goal.length || s.length < 2) {
    return false;
  }
  if (s[0] === goal[0] && s.split('').every((letter) => letter === s[0])) {
    return true;
  }
  let len = s.length;
  let map = new Map();
  let sameMap = new Map();
  let checkCounter = 0;
  for (let index = 0; index < len; index++) {
    if (s[index] !== goal[index]) {
      checkCounter++;
      map.set(s[index], goal[index]);
    } else {
      sameMap.set(s[index], goal[index]);
    }
  }
  if (checkCounter > 2) return false;
  if (
    sameMap.size &&
    map.size === 0 &&
    s.length > 2 &&
    sameMap.size < s.length
  ) {
    return true;
  } else if (map.size !== 2) {
    return false;
  }
  let mapKeys = [...map.keys()];
  let mapVals = [...map.values()];
  if (mapKeys[0] === mapVals[1] && mapKeys[1] === mapVals[0]) {
    return true;
  }
  return false;
};

//console.log(buddyStrings('a', 'a'));
