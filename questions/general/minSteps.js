const minSteps = (s, t) => {
  const sortedText = (s) => {
    return s
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  };
  if (s.length === t.length && sortedText(s) === sortedText(t)) {
    return 0;
  }
  let map = new Map();
  const getOccurence = (string, type, map) => {
    for (let char of string) {
      if (!map.has(char)) {
        map.set(char, [type === 'a' ? 1 : 0, type === 't' ? 1 : 0]);
      } else {
        if (type === 'a') {
          map.get(char)[0] += 1;
        } else {
          map.get(char)[1] += 1;
        }
      }
    }
  };
  let counter = 0;
  getOccurence(s, 'a', map);
  getOccurence(t, 't', map);
  for (let [key, value] of map) {
    counter += Math.abs(value[1] - value[0]);
  }
  return counter;
};

//console.log(minSteps('leetcode', 'coats'));

const customSort = (order, s) => {
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let result = '';
  for (let i = 0; i < order.length; i++) {
    const orderLetter = order[i];
    if (map.has(orderLetter)) {
      result += orderLetter.repeat(map.get(orderLetter));
      map.set(orderLetter, 0);
    }
  }
  for (let [key, value] of map) {
    result += key.repeat(value);
  }
  return result;
};

console.log(customSort('kqep', 'pekeq'));
