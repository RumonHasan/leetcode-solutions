const repeatedStringMatch = (a, b) => {
  let counter = 1;
  let aString = a;
  let bString = b;
  // simeple edge cases
  if (a.includes(b)) return 1;
  if (a.length === b.length && a === b) {
    return 1;
  }
  while (true) {
    aString += a;
    counter++;
    if (aString.includes(bString)) {
      return counter;
    }
    if (aString.length > bString.length * 2 && !aString.includes(bString)) {
      return -1;
    }
  }
};

// checking how many times should I repeat a and expand it to fit b as a substring;
//console.log(repeatedStringMatch('abc', 'cabcabca'));
