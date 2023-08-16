const ransomNoteRetry = (ransomNote, magazine) => {
  const cleanIntuitiveApproach = () => {
    const createHash = (string) => {
      let hash = {};
      for (let index in string) {
        hash[string[index]] ? hash[string[index]]++ : (hash[string[index]] = 1);
      }
      return hash;
    };
    let ransomHash = createHash(ransomNote);
    let magazineHash = createHash(magazine);
    for (const [key, value] of Object.entries(ransomHash)) {
      if (!magazineHash[key]) {
        return false;
      }
      if (magazineHash[key]) {
        const magVal = magazineHash[key];
        if (magVal < value) {
          return false;
        }
      }
    }
    return true;
  };
};

//console.log(ransomNoteRetry('aa', 'ab'));
