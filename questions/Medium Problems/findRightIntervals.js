const makeEqual = (words) => {
  const intutiveApproach = () => {
    let map = new Map();
    if (words.length === 1) return true;
    const strLen = words.length;
    const getFrequency = (string, localMap = map) => {
      for (let char of string) {
        localMap.set(char, (localMap.get(char) || 0) + 1);
      }
      return localMap;
    };
    for (let string of words) {
      getFrequency(string);
    }
    for (let [key, value] of map) {
      if (value % strLen > 0) {
        return false;
      }
    }
    return true;
  };
};

console.log(
  makeEqual([
    'caaaaa',
    'aaaaaaaaa',
    'a',
    'bbb',
    'bbbbbbbbb',
    'bbb',
    'cc',
    'cccccccccccc',
    'ccccccc',
    'ccccccc',
    'cc',
    'cccc',
    'c',
    'cccccccc',
    'c',
  ])
);
