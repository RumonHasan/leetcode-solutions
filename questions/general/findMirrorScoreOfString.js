const findMirrorScoreOfString = (s) => {
  const TLEApproach = () => {
    const getMirror = (char) => {
      // function to get the mirror version of the string
      return String.fromCharCode(219 - char.charCodeAt(0));
    };
    // boolean array of index checks
    let boolArray = [];
    for (let i = 0; i < s.length; i++) {
      boolArray.push([i, false, s[i]]);
    }
    // main iteration loop
    let scoreCount = 0;
    for (let index = 0; index < s.length; index++) {
      const currChar = s[index];
      const mirrorChar = getMirror(currChar);
      // backward iteration to check for mirror char
      for (let subIndex = index - 1; subIndex >= 0; subIndex--) {
        const possibleMirrorChar = s[subIndex];
        // if the mirror char is found then add the score and turn the state into true
        if (mirrorChar === possibleMirrorChar && !boolArray[subIndex][1]) {
          boolArray[subIndex][1] = true;
          boolArray[index][1] = true;
          const currScoreCount = Math.abs(subIndex - index);
          scoreCount += currScoreCount;
          break;
        }
      }
    }

    return scoreCount;
  };
  // optimized approach for getting the mirror char
  const optimizedApproach = (s) => {
    const getMirror = (char) => {
      // function to get the mirror version of the string
      return String.fromCharCode(219 - char.charCodeAt(0));
    };
    let map = new Map();
    let scoreCount = 0;
    for (let index = 0; index < s.length; index++) {
      const currChar = s[index];
      const mirrorChar = getMirror(currChar); // for checking in map when iterating
      // check for mirrorChar and pop the latest index from the map
      if (map.has(mirrorChar)) {
        const latestFoundIndex = map.get(mirrorChar).pop();
        scoreCount += Math.abs(index - latestFoundIndex);
        if (map.get(mirrorChar).length === 0) {
          map.delete(mirrorChar);
        }
      } else {
        // here checking if the map remains unpaired without any character
        if (map.has(currChar)) {
          // map array will be treated as stack here
          map.get(currChar).push(index);
        } else {
          map.set(currChar, [index]);
        }
      }
    }
    return scoreCount;
  };

  console.log(optimizedApproach('aczzx'));
};

console.log(findMirrorScoreOfString('aczzx'));
