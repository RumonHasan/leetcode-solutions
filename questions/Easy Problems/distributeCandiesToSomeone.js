const distributeCandiesToSomeone = (candyType) => {
  let halfLen = candyType.length / 2;
  let set = new Set([...candyType]);
  if (set.size > halfLen) {
    return halfLen;
  }
  return set.size;
};
