const areAlmostEqual = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  const getOc = (s) => {
    let map = new Map();
    for (let char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  };
  let sOne = getOc(s1);
  let sTwo = getOc(s2);
  for (let [key, value] of sOne) {
    if (!sTwo.has(key)) return false;
    if (sTwo.has(key) && sTwo.get(key) !== value) return false;
  }
  let nonEqualPos = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) nonEqualPos++;
  }
  return nonEqualPos === 2;
};

console.log(areAlmostEqual('bank', 'kanb'));
