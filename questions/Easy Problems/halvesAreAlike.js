const halvesAreAlike = (s) => {
  const generalIntuitiveApproach = () => {
    let vowelHash = {
      a: true,
      i: true,
      e: true,
      o: true,
      u: true,
      A: true,
      E: true,
      I: true,
      O: true,
      U: true,
    };
    const firstPart = s.slice(0, s.length / 2);
    const secondPart = s.slice(s.length / 2, s.length);
    const vowelChecker = (string) => {
      let counter = 0;
      for (let index in string) {
        const char = string[index];
        if (vowelHash[char]) {
          counter++;
        }
      }
      return counter;
    };
    return vowelChecker(firstPart) === vowelChecker(secondPart);
  };
};

console.log(halvesAreAlike('book'));
