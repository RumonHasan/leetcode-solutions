const rearrangeCharacters = (s, target) => {
  if (target.length > s.length) return 0;
  let sMap = new Map();
  let targetMap = new Map();
  for (let char of s) {
    sMap.has(char) ? sMap.set(char, sMap.get(char) + 1) : sMap.set(char, 1);
  }
  for (let char of target) {
    targetMap.has(char)
      ? targetMap.set(char, targetMap.get(char) + 1)
      : targetMap.set(char, 1);
  }
  // populating the map with the possible occurences
  let occurences = [];
  for (let [key, value] of targetMap) {
    if (!sMap.has(key)) return 0;
    if (sMap.has(key)) {
      const possibleOccurence = Math.floor(sMap.get(key) / value);
      occurences.push(possibleOccurence);
    }
  }
  return Math.min(...occurences) === Infinity ? 0 : Math.min(...occurences);
};

//console.log(rearrangeCharacters('wvu', 'tu'));
