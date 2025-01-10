const stringMatching = (words) => {
  const bruteForceAproach = () => {
    let counter = 0;
    let array = [];
    for (let i = 0; i < words.length; i++) {
      const checkWord = words[i];
      for (let j = 0; j < words.length; j++) {
        if (i !== j) {
          const patMatch = words[j];
          if (patMatch.includes(checkWord)) {
            array.push(checkWord);
            counter++;
          }
        }
      }
    }
    return [...new Set([...array])];
  };

  // creating a LPS array for KMP approach
  const KMPApproach = () => {
    // create LPS array
    let index = 0;
    while (index < words.length) {
      const currWord = words[index];
      let LPS = new Array(currWord.length).fill(0);
      let prevLPS = 0; // for going through the lps array
      let wordIndex = 1; // for going through the word

      while (wordIndex < currWord.length) {
        if (currWord[wordIndex] === currWord[prevLPS]) {
          // if the current letter is same as the prevLPS letter
          LPS[wordIndex] = prevLPS + 1;
          prevLPS += 1;
          wordIndex++;
        } else if (prevLPS === 0) {
          // stops it at 0 since there is no more lps value behind it
          LPS[wordIndex] = 0;
          wordIndex += 1;
        } else {
          // if its not equal then shift the prevLPS value backwards
          prevLPS = LPS[prevLPS - 1]; // goes back till the end
        }
      }

      console.log(LPS);

      index++;
    }
  };

  console.log(KMPApproach());
};

// console.log(stringMatching(['aaaacaaa', 'mass', 'as', 'hero', 'superhero']));

const minOperations = (boxes) => {
  let newBoxes = boxes.split('');
  let prefLeft = new Array(boxes.length).fill(0);
  let rightLeft = new Array(boxes.length).fill(0);
  let ballsCount = 0;
  let movesCount = 0;
  // getting the left to right side
  for (let i = 0; i < newBoxes.length; i++) {
    prefLeft[i] += movesCount;

    if (newBoxes[i] === '1') {
      ballsCount++;
    }

    movesCount += ballsCount;
  }
  // getting the right to left side
  ballsCount = 0;
  movesCount = 0;
  for (let i = newBoxes.length - 1; i >= 0; i--) {
    rightLeft[i] += movesCount;

    if (newBoxes[i] === '1') {
      ballsCount++;
    }

    movesCount += ballsCount;
  }
  // final iteration
  let res = new Array(boxes.length).fill(0);
  for (let i = 0; i < newBoxes.length; i++) {
    res[i] += rightLeft[i] + prefLeft[i];
  }
  return res;
};

//console.log(minOperations('001011'));

const groupAnagrams = (strs) => {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i];

    const sorted = curr
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    if (map.has(sorted)) {
      map.get(sorted).push(curr);
    } else {
      map.set(sorted, [curr]);
    }
  }
  let collection = [];
  map.forEach((value, _) => collection.push(value));
  return collection;
};

//console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

const countPrefSuff = (words) => {
  let counter = 0;

  const isPrefixSuffix = (checkWord, matchWord) => {
    // checking start
    let startCheck = false;
    let checkIndex = 0;
    for (let i = 0; i < matchWord.length; i++) {
      if (matchWord[i] === checkWord[checkIndex]) {
        checkIndex++;
      } else {
        break;
      }
    }
    if (checkIndex === checkWord.length) {
      startCheck = true;
    }
    // checking end
    let endCheck = false;
    checkIndex = checkWord.length - 1;
    for (let i = matchWord.length - 1; i >= 0; i--) {
      if (matchWord[i] === checkWord[checkIndex]) {
        checkIndex--;
      } else {
        break;
      }
    }
    if (checkIndex === -1) {
      // last first element to check
      endCheck = true;
    }
    return startCheck && endCheck;
  };

  for (let i = 0; i < words.length; i++) {
    const checkWord = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const matchWord = words[j];
      if (isPrefixSuffix(checkWord, matchWord)) {
        counter++;
      }
    }
  }
  return counter;
};

//console.log(countPrefSuff(['a', 'aba', 'ababa', 'aa']));

const wordSubsets = (words1, words2) => {
  let map = new Map();
  if (words2.length === 0) return [];
  // get max freq based on chars of all the words2
  for (let i = 0; i < words2.length; i++) {
    const word = words2[i];
    let localMap = new Map();

    for (let char of word) {
      localMap.set(char, (localMap.get(char) || 0) + 1);
    }
    // updating the big map
    for (const [key, value] of localMap) {
      if (map.has(key) && value > map.get(key)) {
        map.set(key, value);
      }
      if (!map.has(key)) {
        map.set(key, value);
      }
    }
  }
  let collection = [];
  // checking with words1 in order to find whether its possible or not
  for (let word of words1) {
    let wordMap = new Map();
    for (let char of word) {
      wordMap.set(char, (wordMap.get(char) || 0) + 1);
    }
    let check = true;
    for (const [key, value] of map) {
      if (!wordMap.has(key) || (wordMap.has(key) && value > wordMap.get(key))) {
        check = false;
        break;
      }
    }
    if (check) {
      collection.push(word);
    }
  }

  return collection;
};

console.log(
  wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
);
