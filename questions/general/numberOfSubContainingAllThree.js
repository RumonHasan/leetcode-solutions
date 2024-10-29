const numThree = (s) => {
  let map = new Map([
    ['a', 0],
    ['b', 0],
    ['c', 0],
  ]);
  let total = 0;
  let counter = 0;
  let end = 0;
  let start = 0;

  while (end < s.length) {
    const currLetter = s[end];
    if (map.has(currLetter)) {
      map.set(currLetter, map.get(currLetter) + 1);
      counter++;
    }
    while (map.get('a') > 0 && map.get('b') > 0 && map.get('c') > 0) {
      // all three have to be present
      total += s.length - end;
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);
        if (map.get(s[start]) === 0) {
          counter--;
        }
      }
      start++;
    }
    end++;
  }
  return total;
};

// logic: find the appropriate length for abc then move the left pointer
console.log(numThree('aaabc'));
