const numSplits = (s) => {
  const timeLimitExceedApproach = () => {
    let string = s;
    let counter = 0;
    // making splits
    for (let i = 0; i < string.length; i++) {
      let rightHash = {};
      let leftHash = {};
      const leftPortion = string.slice(0, i + 1);
      const rightPortion = string.slice(i + 1, string.length);
      if (leftPortion !== '' && rightPortion !== '') {
        for (let index in leftPortion) {
          leftHash[leftPortion[index]]
            ? leftHash[leftPortion[index]]++
            : (leftHash[leftPortion[index]] = 1);
        }
        for (let index in rightPortion) {
          rightHash[rightPortion[index]]
            ? rightHash[rightPortion[index]]++
            : (rightHash[rightPortion[index]] = 1);
        }
        // check for same number of keys
        const rightKeys = Object.keys(rightHash);
        const leftKeys = Object.keys(leftHash);
        if (rightKeys.length === leftKeys.length) counter++;
      }
    }
    return counter;
  };
  // for all passed test cases O(n) square
  const secondApproach = () => {
    let string = s;
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      const leftPortion = string.slice(0, i + 1);
      const rightPortion = string.slice(i + 1, string.length);
      if (leftPortion !== '' && rightPortion !== '') {
        let left = new Set([...leftPortion]);
        let right = new Set([...rightPortion]);
        left.size === right.size && counter++;
      }
    }
    return counter;
  };

  // O(n) solution
  const acceptedApproach = () => {
    let string = s;
    let left = new Set();
    let right = new Set();
    let arr = [];
    let counter = 0;
    let secondArr = [];
    for (let i = 0; i < string.length; i++) {
      left.add(string[i]);
      arr[i] = left.size;
    }
    // get the reverse set
    for (let i = string.length - 1; i >= 0; i--) {
      right.add(string[i]);
      secondArr[i] = right.size;
    }
    // checking whether the sizes are similar or not;
    for (let i = 0; i < secondArr.length; i++) {
      if (arr[i] === secondArr[i + 1]) {
        counter++;
      }
    }
    return counter;
  };
};

//console.log(numSplits('aacaba'));

// notes : leetcode 1525 Number of ways of splitting the string so that they are good
// both the sides should have equal distinct characters;
