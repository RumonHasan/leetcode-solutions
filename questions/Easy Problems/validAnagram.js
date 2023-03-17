const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const fillMap = (string) => {
    let map = new Map();
    for (let index in string) {
      if (map.has(string[index])) {
        map.set(string[index], map.get(string[index]) + 1);
      } else {
        map.set(string[index], 1);
      }
    }
    return map;
  };
  let tMap = fillMap(t);
  let sMap = fillMap(s);
  let tArray = [];
  let sArray = [];
  for (let letter of tMap) {
    tArray.push(letter);
  }
  for (let letter of sMap) {
    sArray.push(letter);
  }
  sArray.sort((a, b) => a[0].localeCompare(b[0]));
  tArray.sort((a, b) => a[0].localeCompare(b[0]));
  for (let index in sArray) {
    if (
      sArray[index][0] !== tArray[index][0] ||
      sArray[index][1] !== tArray[index][1]
    ) {
      return false;
    }
  }
  return true;
};

//console.log(isAnagram('anagram', 'nagaram'));
