const specialEquiv = (words) => {
  let maxGroupCount = 0;
  let map = new Map();

  const extractChars = (word, map) => {
    const wordArray = word.split('');
    let even = [];
    let odd = [];
    for (let i = 0; i < wordArray.length; i++) {
      const currChar = wordArray[i];
      if (i % 2 === 0) {
        even.push(currChar);
      } else {
        odd.push(currChar);
      }
    }
    const combinedSortedString = [...even.sort(), ...odd.sort()].join('');
    map.set(combinedSortedString, (map.get(combinedSortedString) || 0) + 1);
    if (map.size > maxGroupCount) {
      maxGroupCount = map.size;
    }
  };
  for (const word of words) {
    extractChars(word, map);
  }
  return maxGroupCount;
};

//console.log(specialEquiv(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));

const maxRepeating = (sequence, word) => {
  let result = '';
  let repeatCounter = 0;

  while (result.length <= sequence.length + 1) {
    result += word;
    if (sequence.includes(result)) {
      repeatCounter++;
    }
  }

  return repeatCounter;
};

console.log(maxRepeating('ababc', 'ab'));
