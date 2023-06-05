const repeatedCharacter = (s) => {
  let stackSet = new Set();
  for (let index = 0; index < s.length; index++) {
    if (stackSet.has(s[index])) {
      return s[index];
    }
    stackSet.add(s[index]);
  }
};

//console.log(repeatedCharacter('jkodgypoya'));
