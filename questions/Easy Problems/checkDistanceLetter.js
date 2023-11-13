const checkDistanceLetter = (s, distance) => {
  const intuitiveApproachWithoutCharcode = () => {
    let distanceMap = new Map();
    const alphabets = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    for (let index = 0; index < distance.length; index++) {
      distanceMap.set(alphabets[index], distance[index]);
    }
    let sMap = new Map();
    for (let index in s) {
      const char = s[index];
      if (sMap.has(char)) {
        sMap.get(char).push(Number(index));
      } else {
        sMap.set(char, [Number(index)]);
      }
      if (sMap.get(char).length === 2) {
        sMap.set(char, sMap.get(char)[1] - sMap.get(char)[0] - 1);
      }
    }
    for (let [key, value] of sMap) {
      const char = key;
      if (distanceMap.get(char) !== value) {
        return false;
      }
    }
    return true;
  };
};

// console.log(
//   checkDistanceLetter(
//     'abaccb',
//     [
//       1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0,
//     ]
//   )
// );
