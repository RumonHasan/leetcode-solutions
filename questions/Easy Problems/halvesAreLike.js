const halvesAreAlike = (s) => {
  const halfLength = s.length / 2;
  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength, s.length);
  let vowels = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
  };
  let firstVowelCount = 0;
  let secondVowelCount = 0;

  for (let index in firstHalf) {
    if (vowels[firstHalf[index].toLowerCase()]) {
      firstVowelCount++;
    }
    if (vowels[secondHalf[index].toLowerCase()]) {
      secondVowelCount++;
    }
  }
  return secondVowelCount === firstVowelCount;
};

//console.log(halvesAreAlike('textbook'));
