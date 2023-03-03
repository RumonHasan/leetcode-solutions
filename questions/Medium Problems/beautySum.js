const beautySum = (s) => {
  let beautyCounter = 0;
  // get all substrings
  for (let index = 0; index < s.length; index++) {
    let map = new Map();
    map.set(s[index], 1);
    for (let secondIndex = index + 1; secondIndex < s.length; secondIndex++) {
      // formming subarray in map occurences
      if (map.has(s[secondIndex])) {
        map.set(s[secondIndex], map.get(s[secondIndex]) + 1);
      } else {
        map.set(s[secondIndex], 1);
      }
      if (map.size >= 2) {
        const values = Array.from(map.values());
        const beauty = Math.max(...values) - Math.min(...values);
        beautyCounter += beauty;
      }
    }
  }
  return beautyCounter;
};
// calculating the beauty of the substring by getting all the substrings and finding their occurence
//console.log(beautySum('aabcbaa'));
