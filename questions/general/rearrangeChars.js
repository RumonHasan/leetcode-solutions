const rearrangeChar = (s, target) => {
  let tMap = new Map();
  let set = new Set(target);
  let sMap = new Map();
  for (let char of target) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  for (let char of s) {
    if (set.has(char)) {
      sMap.set(char, (sMap.get(char) || 0) + 1);
    }
  }
  let counter = 0;
  while (sMap.get(target[0]) > 0) {
    let string = '';
    for (let char of target) {
      if (sMap.has(char) && sMap.get(char) > 0) {
        string += char;
      }
      if (sMap.has(char) && sMap.get(char) > 0) {
        sMap.set(char, sMap.get(char) - 1);
      }
    }
    if (string === target) {
      counter++;
    }
  }
  return counter;
};

console.log(rearrangeChar('ilovecodingonleetcode', 'code'));
