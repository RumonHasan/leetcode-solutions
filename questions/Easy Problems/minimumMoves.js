const minimumMovesToConvert = (s) => {
  const intituitiveApproach = () => {
    let end = 0;
    let moves = 0;
    while (end < s.length) {
      const char = s[end];
      if (char === 'X') {
        end += 3;
        moves++;
      } else {
        end++;
      }
    }
    return moves;
  };

  //   console.log(intituitiveApproach());
};

//console.log(minimumMovesToConvert('XXOX'));
