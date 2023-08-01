const optimalParitionSubstring = (s) => {
  const basicIntuitiveApproach = () => {
    let map = new Map();
    let end = 0;
    let substring = '';
    let subArray = [];
    while (end < s.length) {
      let char = s[end];
      if (map.has(char)) {
        subArray.push(substring);
        substring = '';
        map = new Map([[char, 1]]);
      }
      substring += char;
      if (!map.has(char)) {
        map.set(char, 1);
      }
      if (end === s.length - 1) {
        subArray.push(substring);
      }
      end++;
    }
    return subArray.length;
  };
};
// nested one pass approach
// partition the string in such a way that every partition is unique and get the minimum length
//console.log(optimalParitionSubstring('ssssss'));
