const minDeletions = (s) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let index in s) {
      const char = s[index];
      map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    }
    let sortedMap = new Map(Array.from(map).sort((a, b) => b[1] - a[1]));
    let frequencyArray = [...sortedMap.values()];
    let index = 0;
    let freqSet = new Set();
    let counter = 0;
    while (index < frequencyArray.length) {
      while (freqSet.has(frequencyArray[index])) {
        frequencyArray[index] = frequencyArray[index] - 1;
        counter++;
      }
      freqSet.add(frequencyArray[index] > 0 && frequencyArray[index]);
      index++;
    }

    return counter;
  };
  console.log(intuitiveApproach());
};
// decreaase till no occurence availabale
//console.log(minDeletions('bbcebab'));
