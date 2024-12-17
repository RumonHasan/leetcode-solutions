const repeatedLimitString = (s, repeatLimit) => {
  let result = '';
  let sorted = s.split('').sort((a, b) => b.localeCompare(a));
  let map = new Map();

  for (let char of sorted) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  console.log(sorted);

  return result;
};

console.log(repeatedLimitString('cczazcc', 3));
