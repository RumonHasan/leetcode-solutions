const uniqSubseqLen3 = (s) => {
  const intituitiveApproach = () => {
    let index = 0;
    let globalSet = new Set();
    let counter = 0;
    while (index < s.length) {
      const currentChar = s[index];
      // global set to keep track of the global count
      if (!globalSet.has(currentChar)) {
        globalSet.add(currentChar);
        let localSet = new Set();
        let lastIndex = s.lastIndexOf(currentChar);
        if (lastIndex > index) {
          let subIndex = index + 1;
          while (subIndex < lastIndex) {
            localSet.add(s[subIndex]);
            subIndex++;
          }
        }
        counter += localSet.size;
      }
      index++;
    }
    return counter;
  };

  const alternativeApproach = (s) => {
    let set = new Set();
    let counter = 0;
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (!set.has(char)) {
        set.add(char);
        const lastIndex = s.lastIndexOf(char);
        let subSet = new Set();
        for (let subIndex = index + 1; subIndex < lastIndex; subIndex++) {
          subSet.add(s[subIndex]);
        }
        counter += subSet.size;
      }
    }
    return counter;
  };

  //   console.log(alternativeApproach('aabca'));
};

// getting unique len subsequence of size three
//console.log(uniqSubseqLen3('aabca'));
