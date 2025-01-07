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

console.log(minOperations('001011'));
