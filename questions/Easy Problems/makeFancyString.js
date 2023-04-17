const makeFancyString = (s) => {
  console.log(s);
  let dummyS = s + ' '; // to get the last character index for the final count iteration
  s = dummyS;
  let count = 1;
  let prevChar = s[0];
  let newString = '';
  for (let index = 1; index < s.length; index++) {
    if (s[index] == prevChar) {
      count++;
    }
    if (prevChar !== s[index]) {
      if (count >= 3) {
        let newSectorString = prevChar.repeat(2);
        newString += newSectorString;
      } else {
        newString += prevChar.repeat(count);
      }

      count = 1;
      prevChar = s[index];
      initialIndex = index;
    }
  }
  return newString;
};

// basically write a program to make sure no three consequtive chars are equal
console.log(makeFancyString('bbaaabbaaaacccc'));
