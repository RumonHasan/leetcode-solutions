const pLabels = (s) => {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (map.has(letter)) {
      map.get(letter)[1] = i;
    } else {
      map.set(letter, [i, i]);
    }
  }
  let intervals = [...map.values()].sort((a, b) => a[0] - b[0]);
  let result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    if (currInterval[0] > end) {
      let len = end - start + 1;
      result.push(len);
      start = currInterval[0];
      end = currInterval[1];
    }
    if (currInterval[1] > end) {
      end = currInterval[1];
    }
    if (i === intervals.length - 1) {
      result.push(end - start + 1);
    }
  }
  return result;
};

//console.log(pLabels('ababcbacadefegdehijhklij'));
