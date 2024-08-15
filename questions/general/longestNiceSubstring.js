const longestNiceSubstring = (s) => {
  let maxLength = 0;
  let collection = [];
  // function to check for the substring validity
  const checkSubtring = (sub) => {
    let letterSet = new Set();
    for (let char of sub) {
      letterSet.add(char);
    }
    for (let char of sub) {
      const upper = char.toUpperCase();
      const lower = char.toLowerCase();
      if (!(letterSet.has(upper) && letterSet.has(lower))) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      if (substring.length >= 2) {
        if (checkSubtring(substring)) {
          maxLength = Math.max(maxLength, substring.length);
          if (maxLength <= substring.length) {
            collection.push(substring);
          }
        }
      }
    }
  }
  for (let str of collection) {
    maxLength = Math.max(maxLength, str.length);
  }
  for (let str of collection) {
    if (str.length === maxLength) {
      return str;
    }
  }
};

//console.log(longestNiceSubstring('YazaAay'));
