const beautySub = (s) => {
  const checkSubstring = (map) => {
    let min = Infinity;
    let max = -Infinity;
    if (map.size > 1) {
      const vals = [...map.values()];
      for (let i = 0; i < vals.length; i++) {
        const currVal = vals[i];
        if (currVal < min) {
          min = currVal;
        }
        if (currVal > max) {
          max = currVal;
        }
      }
    }
    return max - min;
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let map = new Map();
    for (let j = i; j < s.length; j++) {
      map.set(s[j], (map.get(s[j]) || 0) + 1);
      let diff = checkSubstring(map);
      if (diff !== Infinity && diff !== -Infinity) {
        total += diff;
      }
    }
  }
  return total;
};

//console.log(beautySub('aabcb'));
