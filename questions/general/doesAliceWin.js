const checkWin = (s) => {
  let map = new Map();
  let vowelSet = new Set(['a', 'i', 'e', 'o', 'u']);
  for (let char of s) {
    if (vowelSet.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  let check = false;
  for (let char of s) {
    if (vowelSet.has(char)) {
      check = true;
      break;
    }
  }
  if (!check) return check;

  if ([...map.values()].reduce((a, b) => a + b, 0) % 2 === 1) {
    // odd vowel values
    return true;
  }

  return true;
};

console.log(checkWin('leetcoder'));
