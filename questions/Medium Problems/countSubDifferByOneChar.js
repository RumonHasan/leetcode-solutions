const countSubDifferByOneChar = (s, t) => {
  const bruteForceApproach = () => {
    // idk what I did but it works
    let counter = 0;
    for (let index = 0; index < s.length; index++) {
      for (let subIndex = 0; subIndex < t.length; subIndex++) {
        let currentS = index;
        let currentT = subIndex;
        let difference = 0;
        while (currentS < s.length && currentT < t.length) {
          const currentSChar = s[currentS];
          const currentTChar = t[currentT];
          if (currentSChar !== currentTChar) {
            difference++;
          }
          if (difference === 1) counter++;
          if (difference > 1) break;
          currentS++;
          currentT++;
        }
      }
    }
    return counter;
  };

  // console.log(bruteForceApproach());
};

//console.log(countSubDifferByOneChar('aba', 'baba'));
