const numberOfAbsSub = (s) => {
  let map = new Map([
    ['a', 0],
    ['b', 0],
    ['c', 0],
  ]);
  let endIndex = 0;
  let startIndex = 0;
  let counter = 0;
  let totalSubCount = 0;
  while (endIndex < s.length) {
    if (map.has(s[endIndex])) {
      map.set(s[endIndex], map.get(s[endIndex]) + 1);
    }
    if (map.get(s[endIndex]) === 1) {
      counter++;
    }
    while (counter === 3) {
      totalSubCount += s.length - endIndex;
      map.set(s[startIndex], map.get(s[startIndex]) - 1);
      if (map.get(s[startIndex]) === 0) {
        counter--;
      }
      startIndex++;
    }
    endIndex++;
  }
  return totalSubCount;
};
// number of substrings that all contain the string abc
// map should record all the general letters
// if there is atleast one occurence of the letter a b or c then increase counter by one
// while atleast three letters included then subtring total count will depend on the total length
// console.log(numberOfAbsSub('aabcabc'));
