const findTheDifferenceRedo = (s, t) => {
  const cleanApproach = () => {
    const populateMap = (string) => {
      let map = new Map();
      for (let index = 0; index < string.length; index++) {
        if (map.has(string[index])) {
          map.set(string[index], map.get(string[index]) + 1);
        } else {
          map.set(string[index], 1);
        }
      }
      return map;
    };

    let sMap = populateMap(s);
    let tMap = populateMap(t);
    for (let [key, value] of tMap) {
      if (!sMap.has(key)) {
        return key;
      }
      if (sMap.has(key) && sMap.get(key) !== value) {
        return key;
      }
    }
  };
};

//console.log(findTheDifferenceRedo('a', 'aa'));
