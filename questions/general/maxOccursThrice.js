const maxOccursThrice = (s) => {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let sub = s[i];
    map.set(sub, (map.get(sub) || 0) + 1);
    for (let j = i + 1; j < s.length; j++) {
      if (s[j - 1] === s[j]) {
        sub += s[j];
        map.set(sub, (map.get(sub) || 0) + 1);
      } else {
        break;
      }
    }
  }
  let maxLen = 0;

  for (let [key, value] of map) {
    if (value >= 3) {
      maxLen = Math.max(maxLen, key.length);
    }
  }
  return maxLen === 0 ? -1 : maxLen;
};

// console.log(maxOccursThrice('fafff'));

const getStrongest = (arr, k) => {
  arr.sort((a, b) => a - b);
  let medianIndex = Math.floor((arr.length - 1) / 2);
  let median = arr[medianIndex];
  let copy = arr.sort((a, b) => {
    const differenceA = Math.abs(a - median);
    const differenceB = Math.abs(b - median);
    if (differenceB !== differenceA) {
      return differenceB - differenceA;
    }
    return b - a; // else larger value
  });
  return copy.slice(0, k);
};

//console.log(getStrongest([1, 2, 3, 4, 5], 2));
