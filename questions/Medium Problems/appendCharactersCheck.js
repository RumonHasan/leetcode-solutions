const appendCharacters = (s, t) => {
  let tIndex = 0;
  let prevTString = '';
  for (let index = 0; index < s.length; index++) {
    if (s[index] === t[tIndex]) {
      prevTString += t[tIndex];
      tIndex++;
    }
  }
  let cutIndex = 0;
  let prevIndex = 0;
  let len = 0;
  for (let charIndex in t) {
    if (t[charIndex] === prevTString[prevIndex]) {
      prevIndex++;
      len++;
    } else {
      cutIndex = Number(prevIndex);
    }
  }
  if (len === t.length) return 0;
  return t.slice(cutIndex, t.length).length;
};

//console.log(appendCharacters('lbg', 'g'));
