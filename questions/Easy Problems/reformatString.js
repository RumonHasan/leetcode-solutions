const reformatString = (s) => {
  const generalIntuitiveApproach = () => {
    let letters = [];
    let numbers = [];
    for (let index = 0; index < s.length; index++) {
      if (!isNaN(s[index])) {
        numbers.push(s[index]);
      } else {
        letters.push(s[index]);
      }
    }
    const formString = (firstString, secondString) => {
      let secondIndex = 0;
      let string = '';
      if (firstString.length - secondString.length > 1) return '';
      for (let index = 0; index < firstString.length; index++) {
        string += firstString[index];
        if (secondIndex < secondString.length) {
          string += secondString[secondIndex];
          secondIndex++;
        }
      }
      return string;
    };
    let bigLen = Math.max(numbers.length, letters.length);
    return formString(
      bigLen === numbers.length ? numbers : letters,
      bigLen === numbers.length ? letters : numbers
    );
  };
};

//console.log(reformatString('a0b1c32dd'));
