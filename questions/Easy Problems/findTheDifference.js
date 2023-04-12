const findTheDifference = (s, t) => {
  let map = new Map();
  let tMap = new Map();
  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let char of t) {
    tMap.has(char) ? tMap.set(char, tMap.get(char) + 1) : tMap.set(char, 1);
  }
  // checking whether the letter is present and its occurences are the same or not
  for (let [key, value] of tMap) {
    if (map.has(key) && map.get(key) === value) {
      continue;
    } else {
      return key;
    }
  }
};
//console.log(findTheDifference('a', 'aa'));
